async function loadCSVFloat(path) {
  const response = await fetch(path);
  const text = await response.text();
  const data = text.trim().split('\n').map(row => row.split(',').map(parseFloat));
  return data;
}

async function loadCSVString(path) {
  const response = await fetch(path);
  const text = await response.text();
  const data = text.trim().split('\n').map(row => row.split(','));
  return data;
}

document.addEventListener('DOMContentLoaded', async function() {
  const scoresContainer = document.getElementById('scoresContainer');
  const fname = scoresContainer.dataset.fname;

  const scoresPromise = loadCSVString('/assets/scores/' + fname + '_scores.csv');
  const logitsPromise = loadCSVFloat('/assets/scores/' + fname + '_logits.csv');
  const weightsPromise = loadCSVFloat('/assets/scores/' + fname + '_weights.csv');

  const [scores, logits, weights] = await Promise.all([scoresPromise, logitsPromise, weightsPromise]);

  console.log(scores)
  console.log(logits)
  console.log(weights)

  const genElements = document.getElementsByClassName('generation');
  const contElements = document.getElementsByClassName('context');

  const generationContainer = document.getElementById('generation-container');
  const probabilityBar = document.getElementById('probability-bar');
  const probabilityFill = document.getElementById('probability-fill');
  const probabilityValue = document.getElementById('probability-value');

  function updateProbabilityBarHeight() {
    const generationContainerHeight = generationContainer.offsetHeight;
    probabilityBar.style.height = `${generationContainerHeight}px`;
  }

  // Call the function initially
  updateProbabilityBarHeight();

  // Call the function whenever the window is resized
  window.addEventListener('resize', updateProbabilityBarHeight);

  let activeIndex = -1;

  let clickedContextTokens = [];

  function updateProbabilityBar() {
    if (activeIndex !== -1) {
      let logit = logits[activeIndex];
      
      // Subtract the weights of clicked context tokens from the logit value
      for (let i = 0; i < clickedContextTokens.length; i++) {
        const tokenIndex = clickedContextTokens[i];
        logit -= weights[activeIndex][tokenIndex];
      }
      
      const probability = 1 / (1 + Math.exp(-logit));
      probabilityFill.style.height = `${probability * 100}%`;
      probabilityValue.textContent = probability.toFixed(2);
    } else {
      probabilityFill.style.height = '0';
      probabilityValue.textContent = '0.00';
    }
  }


  function resetColors() {
    for (let j = 0; j < contElements.length; j++) {
      contElements[j].style.backgroundColor = '';
    }
  }

  function setColors(index) {
    for (let j = 0; j < contElements.length; j++) {
      contElements[j].style.backgroundColor = scores[index][j];
    }
  }

  for (let i = 0; i < genElements.length; i++) {
    genElements[i].addEventListener('click', function() {
      if (activeIndex === i) {
        resetColors();
        this.classList.remove('active');
        activeIndex = -1;
      } else {
        for (let j = 0; j < genElements.length; j++) {
          genElements[j].classList.remove('active');
        }
        this.classList.add('active');
        setColors(i);
        activeIndex = i;
      }
      updateProbabilityBar();
    });

    genElements[i].addEventListener('mouseover', function() {
      if (activeIndex !== i) {
        setColors(i);
        if (activeIndex !== -1) {
          genElements[activeIndex].classList.remove('active');
        }
      }
    });

    genElements[i].addEventListener('mouseout', function() {
      if (activeIndex !== i) {
        resetColors();
        if (activeIndex !== -1) {
          setColors(activeIndex);
          genElements[activeIndex].classList.add('active');
        }
      }
    });
  }

  for (let i = 0; i < contElements.length; i++) {
    contElements[i].addEventListener('click', function() {
      const tokenIndex = i;
      
      // Toggle the clicked state of the context token
      if (clickedContextTokens.includes(tokenIndex)) {
        clickedContextTokens = clickedContextTokens.filter(index => index !== tokenIndex);
        this.style.backgroundColor = scores[activeIndex][tokenIndex]; // Reset the background color based on scores
      } else {
        clickedContextTokens.push(tokenIndex);
        this.style.backgroundColor = '#AAA'; // Set the background color to gray
      }
      
      updateProbabilityBar();
    });
  }

});

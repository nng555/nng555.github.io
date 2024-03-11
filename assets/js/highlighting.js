async function load_scores(fname) {
  try {
    const module = await import('/assets/scores/' + fname + '.js');
    const scores = module.scores;
    return scores;
  } catch (error) {
    console.error('Error importing module:', error);
    return null;
  }
}

document.addEventListener('DOMContentLoaded', async function() {
  const scoresContainer = document.getElementById('scoresContainer');
  const fname = scoresContainer.dataset.fname;

  const scores = await load_scores(fname);

  const genElements = document.getElementsByClassName('generation');
  const contElements = document.getElementsByClassName('context');

  let activeIndex = -1;

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
    });

    genElements[i].addEventListener('mouseover', function() {
      if (activeIndex !== i) {
        setColors(i);
      }
    });

    genElements[i].addEventListener('mouseout', function() {
      if (activeIndex !== i) {
        resetColors();
        if (activeIndex !== -1) {
          setColors(activeIndex);
        }
      }
    });
  }
});

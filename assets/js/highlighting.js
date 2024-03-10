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

  var genElements = document.getElementsByClassName('generation');
  var contElements = document.getElementsByClassName('context');
  for (var j = 0; j < contElements.length; j++) {
    contElements[j].setAttribute('data-color', "white");
  }

  for (var i = 0; i < genElements.length; i++) {

    genElements[i].addEventListener('click', function() {
      for (var j = 0; j < genElements.length; j++) {
        genElements[j].style.backgroundColor = "white";
        genElements[j].setAttribute('data-color', "white");
      }
      this.style.backgroundColor = "#888";
      this.setAttribute('data-color', "#888");

      var index = Array.prototype.indexOf.call(genElements, this);

      var contElements = document.getElementsByClassName('context');
      for (var j = 0; j < contElements.length; j++) {
        contElements[j].style.backgroundColor = scores[index][j];
        contElements[j].setAttribute('data-color', scores[index][j]);
      }
    });

    genElements[i].addEventListener('mouseover', function() {
      for (var j = 0; j < genElements.length; j++) {
        genElements[j].style.backgroundColor = "white";
      }
      this.style.backgroundColor = "#888";

      var index = Array.prototype.indexOf.call(genElements, this);

      var contElements = document.getElementsByClassName('context');
      for (var j = 0; j < contElements.length; j++) {
        contElements[j].style.backgroundColor = scores[index][j];
      }
    });

    genElements[i].addEventListener('mouseout', function() {
      for (var j = 0; j < genElements.length; j++) {
        genElements[j].style.backgroundColor = genElements[j].getAttribute('data-color');
      }

      var contElements = document.getElementsByClassName('context');
      for (var j = 0; j < contElements.length; j++) {
        contElements[j].style.backgroundColor = contElements[j].getAttribute('data-color');
      }
    });
  }
});



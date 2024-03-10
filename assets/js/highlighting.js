import { scores } from '/assets/scores/between.js';

console.log(scores.length)
console.log(scores[0].length)
var genElements = document.getElementsByClassName('generation');
var contElements = document.getElementsByClassName('context');
console.log(genElements.length)
console.log(contElements.length)

document.addEventListener('DOMContentLoaded', function() {
  var genElements = document.getElementsByClassName('generation');

  for (var i = 0; i < genElements.length; i++) {
    genElements[i].addEventListener('click', function() {
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
  }
});


window.addEventListener('load', () => {
  let progressBars = document.querySelectorAll('.progress-line');
  let values = [
    '95%',
    '85%',
    '95%',
    '30%',
    '40%',
    '80%',
    '70%',
    '82%',


    '80%',
    '74%',
    '83%',
    '45%',
    '80%'
  ];
  progressBars.forEach((progress, index) => {
    progress.style.width = values[index];
  });
});

function myfunction(smallImg) {
  var fullImg = document.getElementById("image-box");
  fullImg.src = smallImg.src
}
function myfunctio(smallImg) {
  var fullImg = document.getElementById("image-box2");
  fullImg.src = smallImg.src
}

document.querySelector('.nav-tigger').addEventListener("click" , () => {
document.querySelector('.site-content-wrapper').classList.toggle('scaled')

})


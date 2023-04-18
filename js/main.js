const grid = document.querySelector('#grid');
const box = document.createElement('div');
function makeBox(){
    grid.appendChild(box);
    box.classList.add('box'); // just adds class
    // box.classList.toggle('box'); //box on or off
}

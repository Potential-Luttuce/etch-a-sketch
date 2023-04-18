const content = document.querySelector('#content');
const grid = document.querySelector('#grid');
function makeBox(){
    const box = document.createElement('div');
    box.classList.add('box'); 
    grid.appendChild(box);
}
function makeRow() {
    for (let i = 0; i < 16; i++) {
        makeBox();
    }
}
function displaySketchPad() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            makeBox()
        }
    }
}
displaySketchPad();

function makeSketchPad(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            makeBox()
        }
    }
}

function sizeAlert() {
    const size = prompt('Please enter number to re-size SketchPad');
    if (size < 1 || size > 100) {
        alert('Error');
        return;
    } 
    console.log(size);
}


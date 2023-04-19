const grid = document.querySelector('#grid');
function makeDisplayBox(){
    const box = document.createElement('div');
    const display = document.querySelector('#display');
    box.classList.add('box'); 
    display.appendChild(box);
}
function displaySketchPad() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            makeDisplayBox()
        }
    }
}
displaySketchPad();

///

function makeBox(){
    const box = document.createElement('div');
    box.classList.add('box'); 
    grid.appendChild(box);
}
function makeSketchPad(n) {
    if (n < 1 || n > 16) return 'ERROR';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            makeBox()
        }
    }
}

function getSize() {
    const size = prompt('enter new grid size');
    makeSketchPad(size);
    const width = size * 14;
    console.log(`New width should be ${width}`);
    grid.style.width = `${width}`;

}
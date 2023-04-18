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

function makeSketchPad() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            makeBox()
        }
    }
}

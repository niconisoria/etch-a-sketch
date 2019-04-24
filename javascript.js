//Body
const body = document.body;

//Button
const button = document.createElement('button');
button.textContent = 'Reset';
button.addEventListener('click', updateGrid);

//Nav
const nav = document.createElement('nav');
nav.appendChild(button);
body.appendChild(nav);

//Container
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

//Grid

function setGrid(side=16){
    for (let i = 0; i < side*side; i++) {
        let grid = document.createElement('div');
        grid.style.backgroundColor = 'gray';
        grid.style.filter = `brightness(110%)`;
        grid.addEventListener('mouseover', setColor);
        container.appendChild(grid);
    }
}

function updateGrid(){
    let side = prompt('How many squares per side?');
    if(side){
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        container.style.gridTemplateColumns = `repeat(${side}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${side}, 1fr)`;
        setGrid(side);
    }
}

function setColor(){
    if (this.style.backgroundColor == 'gray'){
        this.style.backgroundColor = pixelColor();
    } else{
        let brightness = parseInt(this.style.filter.match(/\d+/));
        brightness != 0 ? this.style.filter = `brightness(${brightness-10}%)` : false;
    }
}

//Random color
function pixelColor(){
    let baseColor = 'd87093';
    let decimalColor = parseInt(baseColor, 16);
    let randomNumber = Math.floor(Math.random() * 10 + 1)
    return '#' + (decimalColor + randomNumber * 1500).toString(16);
}

//Call function

setGrid();




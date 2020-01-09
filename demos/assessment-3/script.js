"use strict"

function toggleColor() {
    if (document.body.style.backgroundColor === 'lightcoral') {
        document.body.style.backgroundColor = 'white'
    } else {
        document.body.style.backgroundColor = 'lightcoral'
    }
}


let boxNumber = 1;

const addBox = _ => {
    const box = document.createElement('div');
    box.classList.add('box');
    box.title = "I'm a box!";
    box.innerText = boxNumber++;
    box.addEventListener('click', _ => box.remove());
    document.querySelector('.box-container').appendChild(box);
}

const addEmptyBox = _ => {
    const box = document.createElement('div');
    box.classList.add('empty');
    box.classList.add('box');
    box.title = "I'm an invisible box!";
   //  box.innerText = boxNumber++;
    box.addEventListener('click', _ => box.remove());
    document.querySelector('.box-container').appendChild(box);
}

const generateCalendar = _ => {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();

    const daysInMonth = new Date(year, month, 0).getDate(); 
    const dayOfWeek = new Date(year, month, 1).getDay(); 
   
    reset();

    for (let i = 0; i < dayOfWeek; i++) {
        addEmptyBox();
    }

    boxNumber = 1;
    for(boxNumber; boxNumber <= daysInMonth; ) {
         addBox()
    }
}

function reset() {
    boxNumber = 1;
    document.querySelector('.box-container').innerHTML = '';
}

document.querySelector('#add-box').addEventListener('click', addBox);
document.querySelector('#generate-calendar').addEventListener('click', generateCalendar);



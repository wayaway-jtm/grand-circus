document.querySelector('#move').addEventListener('click', () => {
    const move = document.querySelector('#move-me');
    const ul2 = document.querySelector('#ul-2');

    ul2.appendChild(move);
})
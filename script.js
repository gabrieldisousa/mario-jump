mario = document.querySelector ('.mario');
pipe = document.querySelector ('.pipe');

jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');


    }, 500)
}

loop = setInterval(() => {

    pipePosition = pipe.offsetLeft;
    marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

console.log(marioPosition);

    if (pipePosition <= 107 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        mario.src = 'game-over.png' 
        mario.style.width = '65px'
        mario.style.left = '45px'

        clearInterval(loop);
    }

}, 10)

document.addEventListener('keydown', jump);

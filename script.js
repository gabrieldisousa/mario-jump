mario = document.querySelector ('.mario');
pipe = document.querySelector ('.pipe');
clouds = document.querySelector ('.clouds');
atualize = document.querySelector ('.atualize')

jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');


    }, 500)
}

loop = setInterval(() => {

    pipePosition = pipe.offsetLeft;
    marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    cloudsPosition = clouds.offsetLeft;

    if (pipePosition <= 107 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        
        // Exibir imagem de atualização
        atualize.style.display = 'block'; // Mostra a imagem "atualize"
        atualize.src = 'atualize.png';
        

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`

         // Alterar imagem de Mario para 'game over'
        mario.src = 'game-over.png' 
        mario.style.width = '65px'
        mario.style.left = '45px'
      
        clearInterval(loop);
    }

}, 10)

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);

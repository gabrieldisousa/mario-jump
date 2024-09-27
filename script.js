mario = document.querySelector ('.mario');
pipe = document.querySelector ('.pipe');
clouds = document.querySelector ('.clouds');
atualize = document.querySelector ('.atualize');
score = 0;
scoreDisplay = document.querySelector('.score'); // Elemento onde a pontuação será exibida
scored = false; // Flag para controlar o incremento da pontuação

jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');


    }, 500)
}

pipe.style.visibility = 'hidden'; // Pipe fica invisível
// Após 1 segundo, o pipe aparece e a animação começa
setTimeout(() => {
    pipe.style.visibility = 'visible'; // Pipe se torna visível
}, 2000);


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
    }   else if (pipePosition < 0 && pipePosition > -50 && !scored) {
        // Se o Mario passou pelo pipe com sucesso
        score++; // Incrementa a pontuação
        scoreDisplay.innerText = `Score: ${score}`; // Atualiza o display da pontuação
        scored = true; // Marca que a pontuação foi incrementada
    }
         // Quando o pipe sai da tela completamente, reseta a flag
        if (pipePosition < -50) {
        scored = false; // Reseta para permitir o próximo incremento
    }

}, 10)

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);

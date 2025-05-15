const player = document.getElementById('player');
const game = document.getElementById('game');
const obstaculos = document.querySelectorAll('.obstaculo');

// Movimento do player
let x = 500;
let y = 400;
const speed = 2;
const keys = {};

// evento ativado quando teclas estão sendo "clicadas"
document.addEventListener('keydown', (e) => {
    keys[e.key.toLowerCase()] = true;
});

// evento ativado quando teclas são "soltas" 
document.addEventListener('keyup', (e) => {
    keys[e.key.toLowerCase()] = false;
});

function colidindo(react1, react2) {
    return !(
        react1.right < react2.left ||
        react1.left > react2.right ||
        react1.bottom < react2.top ||
        react1.top > react2.bottom
    );
}

//teclas de movimento padrão w,a,s,d
function update() {
    let nextX = x;
    let nextY = y;

    if(keys['w']) nextY -= speed;
    if(keys['s']) nextY += speed;
    if(keys['a']) nextX -= speed;
    if(keys['d']) nextX += speed;

    const proxReact = {
        left: nextX,
        top: nextY,
        right: nextX + player.offsetWidth,
        bottom: nextY + player.offsetHeight,
    };

    let collided = false;

    obstaculos.forEach(obs => {
        const rect = obs.getBoundingClientRect();
        const gameRect = game.getBoundingClientRect();

        const obsRect = {
            left: rect.left - gameRect.left,
            top: rect.top - gameRect.top,
            right: rect.right - gameRect.left,
            bottom: rect.bottom - gameRect.top,
        };

        if(colidindo(proxReact, obsRect)) {
            collided = true;
        }
    });

    if(!collided) {
        x = nextX;
        y = nextY;
    }

    player.style.left = x + 'px';
    player.style.top = y + 'px';

    requestAnimationFrame(update); // movimentos suaves/continua loop
}

update(); // inicia loop


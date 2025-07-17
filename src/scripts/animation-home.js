// animacion de desvanecimineto y aparecimiento de imagen principal
const images = [
    './src/assets/imagens/sections/home/ilustracion1.png',
    './src/assets/imagens/sections/home/ilustracion2.png',
    './src/assets/imagens/sections/home/ilustracion3.png',
];

const texts = [
    'Ideas y creaciones Sin Limites',
    'Creaciones en 3D',
    'Diseños que Inspiran Movimiento',
];

let index = 0;
const img = document.getElementById('IMG_HOME');
const text = document.getElementById('IMG_HOME_TEXT');

function animate() {
    // 1. Fade out
    img.classList.remove('fade-in');
    text.classList.remove('fade-in');
    img.classList.add('fade-out');
    text.classList.add('fade-out');

    // 2. Esperamos a que termine el fade-out (1s), cambiamos contenido
    setTimeout(() => {
        index = (index + 1) % images.length;
        img.src = images[index];
        text.textContent = texts[index];

        // 3. Fade in desde la derecha
        img.classList.remove('fade-out');
        text.classList.remove('fade-out');
        img.classList.add('fade-in');
        text.classList.add('fade-in');
    }, 1000); // coincide con la duración del fade-out

    // 4. Repetir después de 5 segundos (incluye animación y pausa centrado)
    setTimeout(animate, 5000);
}

// Iniciar la animación
setTimeout(animate, 2000); // arranca después de 2s
// datos sobre los servicios
const TITTLES = [
    "Arte Conceptual & Visualización",
    "Diseño de Logos & Branding",
    "Ilustraciones Personalizadas"
];

const ICONS_SUB_TITTLE = [
    "bi bi-palette-fill text-2xl",
    "bi bi-magic text-2xl",
    "bi bi-rocket-takeoff text-2xl"
]

const SUMMARIES = [
    "Creación de conceptos artísticos, bocetos con carácter y visualizaciones digitales que dan vida a ideas y marcas. Especializado en el desarrollo visual para proyectos de branding, videojuegos y experiencias interactivas, con un enfoque creativo que combina estilo, narrativa y funcionalidad. Cada propuesta está pensada para destacar, conectar con el público y dejar una impresión duradera.",
    "Desarrollamos identidades visuales impactantes que capturan y comunican la esencia única de tu marca, asegurando coherencia y reconocimiento en cada punto de contacto. Nuestro enfoque combina estrategia, creatividad y diseño funcional para crear sistemas visuales versátiles que se adaptan a múltiples plataformas, desde entornos digitales hasta impresos, garantizando una presencia sólida, memorable y alineada con tus objetivos de comunicación",
    "Realizamos ilustraciones a medida que se adaptan perfectamente a tus necesidades, ya sea para portadas, materiales promocionales, contenido editorial o cualquier idea que tengas en mente. Cada pieza es concebida con atención al detalle, estilo personalizado y un enfoque narrativo que potencia el mensaje visual. Trabajamos en estrecha colaboración contigo para transformar conceptos en imágenes impactantes, únicas y alineadas con la identidad de tu proyecto o marca."
];

const IMAGES = [
    "./src/assets/imagens/sections/images_servicies/ilustracion-creativa-artistica-dibujada-mano_98292-43548.png",
    "./src/assets/imagens/sections/images_servicies/coleccion-logos-tecnologia_23-2148155881.png",
    "./src/assets/imagens/sections/images_servicies/collage-plantas-sentido-vista_23-2149848106.png"
]

// valor de datos
let valorDato = 0;

// actualiza los datos del servicio actual
function nextServicies() {
    const SUB_TITTLE = document.getElementById("SUB_TITTLE");
    const ICON_SUB_TITTLE = document.getElementById("ICON_SUB_TITTLE");
    const SUMMARY = document.getElementById("SUMMARY");
    const IMG_SERVICIE = document.getElementById("IMG_SERVICIE");


    valorDato++;

    if (valorDato > 2) {
        valorDato = 0
    }

    SUB_TITTLE.textContent = TITTLES[valorDato];
    ICON_SUB_TITTLE.setAttribute("class", ICONS_SUB_TITTLE[valorDato])
    SUMMARY.textContent = SUMMARIES[valorDato];
    IMG_SERVICIE.setAttribute("src", IMAGES[valorDato])
}








// efecto desvanecimiento y aparecimineto
function fadeOutIn() {
    const CONTAINER_SERVICIE_SUMMMARY = document.getElementById('CONTAINER_SERVICIE_SUMMMARY');
    const IMG_SERVICIE = document.getElementById("IMG_SERVICIE")
    const NEXT_BUTTON_SERVICIES = document.getElementById("NEXT_BUTTON_SERVICIES");
    NEXT_BUTTON_SERVICIES.disabled = true;

    // Aplica opacidad 0 (fade out)
    CONTAINER_SERVICIE_SUMMMARY.classList.remove('opacity-100');
    IMG_SERVICIE.classList.remove('opacity-100');

    CONTAINER_SERVICIE_SUMMMARY.classList.add('opacity-0');
    IMG_SERVICIE.classList.add('opacity-0');
    // Después de 1 segundo, vuelve a opacidad 100 (fade in)
    setTimeout(() => {
        nextServicies()
        CONTAINER_SERVICIE_SUMMMARY.classList.remove('opacity-0');
        CONTAINER_SERVICIE_SUMMMARY.classList.add('opacity-100');

        IMG_SERVICIE.classList.remove('opacity-0');
        IMG_SERVICIE.classList.add('opacity-100');

        NEXT_BUTTON_SERVICIES.disabled = false;
    }, 1000); // 1000 ms = 1 segundo
}
// botones menu
const HOME_SECTION = document.getElementById("HOME_SECTION")
const SERVICES_SECTION = document.getElementById("SERVICES_SECTION");
const ABOUT_SECTION = document.getElementById("ABOUT_SECTION");
const CONTACT_SECTION = document.getElementById("CONTACT_SECTION");

const MENU_NAV = document.getElementById("NAV_BUTTON_CONTAINER");

// cambia de seccion del menu con animacion de desvanecimiento
function changeOfSection(selectedSection) {
    const CONTAINER_INT = document.getElementById('CONTAINER_INT');
    const CONTAINER_BUTTONS = MENU_NAV.querySelectorAll(".NAV-BUTTON");

    if (!selectedSection.classList.contains("hidden")) {
        return;
    }
    else {
        // se oculta la ventana general
        CONTAINER_INT.classList.remove('opacity-100');
        CONTAINER_INT.classList.add("opacity-0");
        // se desactiva los botones
        for (const BUTTON of CONTAINER_BUTTONS) {
            BUTTON.disabled = true;
        }
    };

    setTimeout(() => {
        // se ocultan todas las secciones
        HOME_SECTION.classList.add("hidden");
        SERVICES_SECTION.classList.add("hidden");
        ABOUT_SECTION.classList.add("hidden");
        CONTACT_SECTION.classList.add("hidden");
        // se visibiliza la seccion seleccionada
        selectedSection.classList.remove("hidden");
        // se visibiliza la ventana general
        CONTAINER_INT.classList.remove("opacity-0");
        CONTAINER_INT.classList.add("opacity-100");
        // se activa los botones
        for (const BUTTON of CONTAINER_BUTTONS) {
            BUTTON.disabled = false;
        }
    }, 1000);
}
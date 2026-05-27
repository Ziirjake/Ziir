document.addEventListener("DOMContentLoaded", () => {
    
    // 1. ANIMACIÓN REVEAL EN SCROLL (Aparición progresiva de las cajas)
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.92; 

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add("active");
            }
        });
    };

    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll, { passive: true });


    // 2. LÓGICA DEL VISOR NATIVO COMPACTO (Pantalla completa con zoom táctil habilitado)
    const visor = document.getElementById("visor-imagen");
    const imagenExpandida = document.getElementById("imagen-expandida");
    const botonCerrar = document.getElementById("cerrar-visor");

    document.body.addEventListener("click", (e) => {
        if (e.target.classList.contains("main-image")) {
            imagenExpandida.src = e.target.src;
            imagenExpandida.alt = e.target.alt;
            document.body.classList.add("modal-abierto");
            visor.showModal();
        }
    });

    const cerrarVisor = () => {
        visor.close();
        document.body.classList.remove("modal-abierto");
    };

    botonCerrar.addEventListener("click", (e) => {
        e.stopPropagation();
        cerrarVisor();
    });

    visor.addEventListener("click", (e) => {
        if (e.target === visor || e.target.classList.contains("zoom-container")) {
            cerrarVisor();
        }
    });


    // 3. CONTROL DE LA INTRO CINEMATOGRÁFICA (Deslizamiento fluido hacia arriba)
    const intro = document.getElementById("intro-cinematica");
    
    if (intro) {
        document.body.style.overflow = "hidden";

        setTimeout(() => {
            intro.classList.add("fade-up");
            document.body.style.overflow = "";

            setTimeout(() => {
                intro.remove();
            }, 1000); 

        }, 2500); 
    }
});
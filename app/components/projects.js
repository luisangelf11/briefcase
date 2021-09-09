import { AnimationComponent } from "../helpers/scroll-animation.js";

export function Projects() {
    const $section = document.createElement("section");
    $section.classList.add("projects");
    $section.innerHTML = `
    <h2>Mis proyectos</h2>
    <article class="video-smart none" id="video-smart-1">
        <h3>Instant Clinic</h3>
        <p>
        Instant clinic es un software para consultorios privados, el cual facilita la gestion de consultas, 
        citas médicas y generación de reportes médicos estadísticos. <small>Versión: Demo</small></p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/NVrPETbvukI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </article>
    <article class="video-smart none" id="video-smart-2">
        <h3>Instant Loands</h3>
        <p>Instant Loands es un software de prestamos, el cual facilita la gestion de prestamos, cración y
        generación de reportes estadísticos. Este software es muy dinámico, por eso, la "D"
        en su nombre. <small>Versión: Demo</small></p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/2HHz06b9M_I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </article>
    `;
    AnimationComponent("video-smart-1", 2);
    AnimationComponent("video-smart-2", 2);
    return $section;
}
export function Menu(){
    const $nav = document.createElement("nav");
    $nav.innerHTML = `
        <a href="#/" id="home"><i class="fas fa-home"></i>Inicio</a>
        <a href="#/proyectos" id="projects"><i class="fas fa-laptop-code"></i>Proyectos</a>
        <a href="https://luisangelfc.blogspot.com/" target="_blank"><i class="fas fa-blog"></i>Blog</a>
        <a href="#/contactar" id="contact"><i class="fas fa-id-card-alt"></i>Contactar</a>
    `;
    return $nav;
}
import {AnimationComponent} from "../helpers/scroll-animation.js";

export function Home(){
    const $home = document.createElement("section");
    $home.classList.add("home");
    $home.innerHTML = `
    <article class="me none" id="me">
       <h2>¿Quién soy?</h2>
       <p>¡Hola! Mi nombre es Luis Angel Fernández de 17 años de edad, soy un desarrollador dominicano que 
       ama la programación desde los 14 años. Mi meta es ser un gran desarrollador para brindar mis servicios
       a PYMES (pequeñas y medianas empresas), es por eso, que realicé este portafolios para mostrar algunas de mis
       habilidades, proyectos y tecnologías que se utilizar en este hermoso mundo del desarrollo. 
       </P>
    </article>
    <article class="tech none" id="tech">
        <h2>Mis tecnologías</h2>
        <div class="programming">
            <figure>
                <img src="app/assets/c-sharp.svg" alt="C#">
                <figcaption>C# ~ Escritorio 80%</figcaption>
            </figure>
            <figure>
                <img src="app/assets/javascript.svg" alt="JavaScript">
                <figcaption>JavaScript ~ FrontEnd 75%</figcaption>
            </figure>
            <figure>
                <img src="app/assets/css.svg" alt="Css">
                <figcaption>Css3 ~ Diseño web 65%</figcaption>
            </figure>
            <figure>
                <img src="app/assets/html.svg" alt="Html5">
                <figcaption>Html5 ~ Diseño Web 75%</figcaption>
            </figure>
            <figure>
                <img src="app/assets/json.svg" alt="JSON">
                <figcaption>JSON ~ API REST</figcaption>
            </figure>
            <figure>
                <img src="app/assets/sql.svg" alt="SQL">
                <figcaption>SQL ~ Bases de datos 65%</figcaption>
            </figure>
            <figure>
                <img src="app/assets/git.svg" alt="Git">
                <figcaption>Git y GitHub</figcaption>
            </figure>
            <figure>
                <img src="app/assets/photoshop.svg" alt="Adobe Photoshop">
                <figcaption>Photoshop</figcaption>
            </figure>
        </div>
    </article>
    <article class="services none" id="services">
        <h2>Servicios que ofrezco</h2>
        <details class="services-content">
            <summary>💻 Desarrollo de aplicaciones de escritorio</summary>
            <article>Puedo desarrollar aplicaciones personalizadas de escritorio
            con el lenguaje C Sharp (C#) y SQL Server como gestor de bases de datos. Dichas
            aplicaciones pueden ser: sistemas de prestamos, sistemas de clinicas, sistemas de
            ventas, sistemas de control de inventarios, etc.</article>
        </details>
        <details class="services-content">
            <summary>🌐 Desarrollo Front-End</summary>
            <article>Tengo conocimientos solidos de HTML5, Css3 y Vanilla JavaScript
            para aportar en desarrollo web del lado Front-End, un ejemplo de algunos de mis
            proyectos Front-End es este portafolios. <small>Nota: Estoy apunto de aprender
            un framework para ser un desarrollador Front-End completo.</small></article>
        </details>
        <details class="services-content">
            <summary>📱 Community Manager</summary>
            <article>Puedo gestionar redes sociales de negocios, es decir, realizar 
            posts, vídeos, reels, historias y una descripción llamativa en cada publicación.</article>
        </details>
        <details class="services-content">
            <summary>🏫 Tutorias de C# básico</summary>
            <article>Tengo un curso de C# básico en mi plataforma <a href="https://cursodeprogramacion.emprendehoy.site/" target="_blank">Emprede Hoy</a> para 
            aquellas personas que desean aprender este lenguaje, el curso cuenta con 4 módulos con un total de 64 lecciones.</article>
        </details>
    </article>
    `;
    AnimationComponent("tech", 1.5);
    AnimationComponent("me", 1);
    AnimationComponent("services", 1.5);
    return $home;
}
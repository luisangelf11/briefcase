export function Footer(){
    const $footer = document.createElement("footer");
    $footer.classList.add("footer");
    $footer.innerHTML = `
        <p>©Copyright 2021-2022 ~ Luis Angel Software</p>
        <p>Todos los derechos reservados</p>
    `;
    return $footer;
}
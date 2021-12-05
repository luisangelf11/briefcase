export function Banner(){
    const $banner = document.createElement("section");
    $banner.classList.add("banner");
    $banner.innerHTML = `
    <div class="box">
        <img src="./app/assets/me.jpg" alt="Luis Angel Fernandez">
        <h3>Luis Angel Fernandez ~ Desarrollador</h3>
        <p>Si lo puedes imaginar, lo puedes programar</p>
        <a href="https://api.whatsapp.com/send?phone=+1 829-269-3768" target="_blank" class="call">WhatsApp</a>
    </div>
    `;
    return $banner;
}

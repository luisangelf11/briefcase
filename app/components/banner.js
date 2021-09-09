export function Banner(){
    const $banner = document.createElement("section");
    $banner.classList.add("banner");
    $banner.innerHTML = `
    <div class="box">
        <img src="https://scontent.fsti4-1.fna.fbcdn.net/v/t1.6435-9/92817662_2689478677964024_3331476500804272128_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=IxOG-WTS-ZwAX-ltK5x&_nc_ht=scontent.fsti4-1.fna&oh=8da0f4696801d59d6e52d093c4528cc3&oe=61615E3F" alt="Luis Angel Fernandez">
        <h3>Luis Angel Fernandez ~ Desarrollador</h3>
        <p>Si lo puedes imaginar, lo puedes programar</p>
        <a href="https://api.whatsapp.com/send?phone=8292693768" target="_blank" class="call">WhatsApp</a>
    </div>
    `;
    return $banner;
}

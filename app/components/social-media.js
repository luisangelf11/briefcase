export function SocialMedia(){
    const $box = document.createElement("section");
    $box.classList.add("social-media");
    $box.innerHTML = `
        <span><a href="https://twitter.com/Luis_Angelf11" target="_blank"><i class="fab fa-twitter-square"></i></a></span>
        <span><a href="https://www.facebook.com/luisangel.fernandez.543" target="_blank"><i class="fab fa-facebook-square"></i></a></span>
        <span><a href="https://www.instagram.com/luis_angelfc11/" target="_blank"><i class="fab fa-instagram-square"></i></a></span>
        <span><a href="https://www.youtube.com/channel/UCyLFPslQeDt_sHiAmFBqi_A" target="_blank"><i class="fab fa-youtube-square"></i></a></span>
    `;
    return $box;
}
import { Banner } from "./components/banner.js";
import { BtnUp } from "./components/btn-up.js";
import { Footer } from "./components/footer.js";
import { Header } from "./components/header.js";
import { Main } from "./components/main.js";
import { Router } from "./components/router.js";
import { SocialMedia } from "./components/social-media.js";
import { MenuCheck } from "./helpers/menu-responsive.js";

export function App(){
    const $root = document.getElementById("root");
    $root.innerHTML = null;
    //Add HTML to my SPA
    $root.appendChild(Header());
    $root.appendChild(Banner());
    $root.appendChild(Main());
    $root.appendChild(BtnUp());
    $root.appendChild(SocialMedia());
    $root.appendChild(Footer());
    Router();
    MenuCheck();
}
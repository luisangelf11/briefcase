import { BtnMenu } from "./btn-menu-responsive.js";
import { Menu } from "./menu.js";

export function Header(){
    const $header = document.createElement("header");
    $header.classList.add("header");
    $header.appendChild(BtnMenu());
    $header.appendChild(Menu());
    return $header;
}
import { HerePage } from "../helpers/here.js";
import { ContactForm } from "./contact-form.js";
import { Home } from "./home.js";
import { Projects } from "./projects.js";

export function Router(){

    let {hash} = location;
    const $main = document.getElementById("main");

    //Router
    if(!hash || hash === "#/"){
        $main.innerHTML = null;
        $main.appendChild(Home());
        HerePage("home");
    }else if(hash === "#/contactar"){
        $main.innerHTML = null;
        $main.appendChild(ContactForm());
        HerePage("contact");
    }else if(hash === "#/proyectos"){
        $main.innerHTML = null;
        $main.appendChild(Projects());
        HerePage("projects");
    }
}
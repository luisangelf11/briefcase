export function BtnMenu(){
    const $boxMenu = document.createElement("div");
    $boxMenu.classList.add("box-menu-btn");
    $boxMenu.innerHTML =`
    <label for="menu-check" id="btn-menu"><i class="fas fa-bars"></i></label>
    <input type="checkbox" id="menu-check">
    `; 
    return $boxMenu;
}
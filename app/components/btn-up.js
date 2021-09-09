export function BtnUp(){
    const $btn = document.createElement("button");
    $btn.classList.add("btn-up");
    $btn.id = "up";
    $btn.innerHTML = `<i class="fas fa-level-up-alt"></i>`;

    document.addEventListener("click", (e)=>{
        if(e.target.matches("#up") || e.target.matches(".fa-level-up-alt")){
            window.scrollTo({
                behavior: "smooth",
                top: 0
            });
        }
    });

    window.addEventListener("scroll", (e)=>{
        let y = window.pageYOffset || document.documentElement.scrollTop;
        if(y === 0){
            $btn.classList.add("none");
        }else if(y > 300){
            $btn.classList.remove("none");
        }
    });

    window.addEventListener("DOMContentLoaded", $btn.classList.add("none"));

    return $btn;
}
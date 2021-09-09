export function MenuCheck(){
    const $nav = document.querySelector("nav"),
          $check = document.getElementById("menu-check"),
          $label = document.getElementById("btn-menu");

    document.addEventListener("change", (e)=>{
        if(e.target === $label || e.target.matches(".fa-bars") || e.target === $check){

          if($nav.style.transform !== "translateX(0%)"){
            $nav.style.transform = "translateX(0%)";
            }
            else if($nav.style.transform === "translateX(0%)"){
                $nav.style.transform = "translateX(-100%)";
            }
        }
    });

      //Media Query
    
      const mq = matchMedia("(max-width:768px)");
      const changeSize = (ml)=>{
          ml.matches? $nav.style.transform = "translateX(-100%)": $nav.style.transform = "translateX(0%)";
      }
      mq.addListener(changeSize);
}
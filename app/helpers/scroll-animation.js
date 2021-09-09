export function AnimationComponent (id, size) {
    window.addEventListener("scroll", (e)=>{
        const $animation = document.getElementById(id) || null;
        if($animation !== null){
            let positionObj = $animation.getBoundingClientRect().top;
            let windowSize = window.innerHeight / size;
            if(positionObj < windowSize){
                $animation.classList.remove("none");
            }else{
                $animation.classList.add("none");
            }
        }
    });
}
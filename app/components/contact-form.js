export function ContactForm () {
    const $form = document.createElement("form");
    $form.classList.add("contact-form");
    $form.innerHTML = `
    <h2>Contact Form</h2>
    <input name="name" type="text" placeholder="Insert your name" title="Enter the correct format" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" required>
    <input name="email" type="email" placeholder="Insert your email" title="Enter the correct format" pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$" required>
    <input name="subject" type="text" placeholder="Subject" title="Enter the correct format" required>
    <textarea name="comments" cols="50" rows="5" placeholder="Write the message" title="The message exceed 450 characters" data-pattern="^.{0,455}$" required></textarea>
    <input type="submit" value="Enviar">
    <div class="loader-form none">
        <img src="app/assets/oval.svg" alt="Loading">
    </div>
    <div class="response-form none">
    <p>Response to here</p>
    </div>
    `;

    function FormValidation(){
        const d = document,
             $form = d.querySelector(".contact-form"),
             $inputs = d.querySelectorAll(".contact-form [required]");
        
        $inputs.forEach((el) =>{
            const $span = d.createElement("p");
            $span.id = el.name;
            $span.textContent = el.title;
            $span.classList.add("contact-form-error", "none");
            el.insertAdjacentElement("afterend", $span);
        });

        d.addEventListener("keyup", (e)=>{
            if(e.target.matches(".contact-form [required]")){
                let $input = e.target,
                    pattern = $input.pattern || $input.dataset.pattern;
                if(pattern && $input !== ""){
                    let regex = new RegExp(pattern);
                    return !regex.exec($input.value)
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active");
                }
                if(!pattern){
                    return $input.value === ""
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active"); 
                }
            }
        });

        d.addEventListener("submit", (e)=>{
            e.preventDefault();
            alert("Send Message");
            const $loader = d.querySelector(".loader-form"),
                  $response = d.querySelector(".response-form");
                
                  $loader.classList.remove("none");
                  fetch("https://formsubmit.co/ajax/luisangelf491@gmail.com", {
                      method: "POST",
                      body: new FormData(e.target)
                  })
                  .then(res => res.ok?res.json():Promise.reject(res))
                  .then(json =>{
                    $loader.classList.add("none");
                    $response.classList.remove("none");
                    $response.innerHTML = `<p>${json.message}</p>`;
                    $form.reset();
                  })
                  .catch(err =>{
                    let message = err.statusText || "Something unexpected happened :(";
                    $response.innerHTML = `Error ${json.status}: ${message}`;
                  })
                  .finally(()=>{
                      setTimeout(()=>{
                        $response.classList.add("none");
                        $response.innerHTML = `<p>Response to here</p>`;
                      },3000);
                  });
        });
    }

    setTimeout(()=>{
        FormValidation();
    }, 100);

    return $form;
}
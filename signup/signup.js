//Variables

//background del body que va a cambiar
const bodyBackground = document.getElementsByTagName("body");

//titulo dinamico 
const nameBackground = document.querySelector(".nameBackground");

//boton de redireccionamiento
let backtohome = document.querySelector(".backtohome");

//boton de redireccionamiento
let gotoLogin = document.querySelector(".gotoLogin");

//boton de redireccionamiento
const form = document.querySelector("form");

//spinner
let spinnerOverlay = document.querySelector(".spinnerOverlay")

                        


const initBG = () => {
  // traerBackgrounds();

  //redirrecion al home
  backtohome.addEventListener("click", () => {
    spinnerOverlay.classList.remove("spinnerNone");
    setTimeout(() => {
      spinnerOverlay.classList.add("spinnerNone");
      document.location.href = "/index.html";

      // document.location.href = " https://belen-destefano.github.io/SignInUp/";
    }, 2000);
  });
  //redirrecion al sign up
  gotoLogin.addEventListener("click", () => {
    spinnerOverlay.classList.remove("spinnerNone");
    setTimeout(() => {
      spinnerOverlay.classList.add("spinnerNone");
      document.location.href = "/login/login.html";

      // document.location.href = " https://belen-destefano.github.io/SignInUp/login/login.html";
    }, 2000);
  });

  form.addEventListener("submit", submitForm); // al enviar el formulario se ejecuta la funcion submitForm q se encuentra en validation.js
};

initBG();
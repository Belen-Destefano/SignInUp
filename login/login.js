//Variables

//background del body que va a cambiar
const bodyBackground = document.getElementsByTagName("body");

//titulo dinamico 
const nameBackground = document.querySelector(".nameBackground");

//boton de redireccionamiento
let backtohome = document.querySelector(".backtohome");

//boton de redireccionamiento
let gotocreatebtn = document.querySelector(".gotocreatebtn");

//spinner
let spinnerOverlay = document.querySelector(".spinnerOverlay")


const initBG = () => {
  // traerBackgrounds();

  //redirrecion al home
  backtohome.addEventListener("click", () => {
    spinnerOverlay.classList.remove("spinnerNone");
    setTimeout(() => {
      spinnerOverlay.classList.add("spinnerNone");
      document.location.href = "../index.html";
    }, 2000);
  });
  //redirrecion al sign up
  gotocreatebtn.addEventListener("click", () => {
    spinnerOverlay.classList.remove("spinnerNone");
    setTimeout(() => {
      spinnerOverlay.classList.add("spinnerNone");
      document.location.href = "../signup/signUp.html";
    }, 2000);
  });
};

initBG();
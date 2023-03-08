/* Este archivo utiliza imágenes de Freepik en el background dinamico 
* <a href="https://www.freepik.es/foto-gratis/chica-alegre-cabello-lacio-rosa-pie-pose-confiada-sonriente-bonita-dama-europea-sueter-gafas-brillantes-bailando-sesion-fotos_11207506.htm">Imagen de lookstudio</a> en Freepik

* <a href="https://www.freepik.es/foto-gratis/senora-alegre-traje-naranja-sonriendo-sinceramente-sobre-fondo-rayado-morena-jovencita-auriculares-brillantes-posando-cafe_23986664.htm#from_view=detail_alsolike">Imagen de lookstudio</a> en Freepik.

* Imagen de <a href="https://www.freepik.es/foto-gratis/mujer-joven-tiro-medio-doble-exposicion-ciudad_23984599.htm#query=mujer%20futurista&position=2&from_view=search&track=ais">Freepik</a>*/

// Seleccionar elementos del DOM
const spinnerOverlay = document.querySelector(".spinnerOverlay");
const nav = document.querySelector(".nav");
const containerHome = document.querySelector(".containerHome");
let interval;
const userBoton = document.querySelector(".userBoton");
const userWelcome = document.querySelector(".userWelcome");
const logoutnone = document.querySelector(".logoutnone");
const logoutblock = document.querySelector(".logoutblock");
const homeTitle = document.querySelector(".homeTitle");

const containerButtomFooterHome = document.querySelector(".containerButtomFooterHome");
const gotoLogin = document.querySelector(".gotoLogin");
const gotocreatebtn = document.querySelector(".gotocreatebtn");



// Obtener usuarios del Local Storage o array vacio
let user = JSON.parse(localStorage.getItem("user")) || [];

// Función para comprobar si hay un usuario logueado
const userLoged = (user) => {
  let valid = false;
  const userlogedTrue = user.find((user) => user.isLoged === true);

  if (userlogedTrue) {
    valid = true;
    userBoton.style.display = "block";
    renderuserLoged(userlogedTrue);
  } else {
    renderuserLogOut()    
  }

  return valid;
};

// Cambio en el renderizado después de iniciar sesión del usuario
function renderuserLoged(userlogedTrue) {

  if(userLoged){

    //condicional para que no haga background dinamico si esta en modo mobile
    if (window.innerWidth > 420) {
      traerBackgrounds();
    }

    //que aparazca con hover el boton para cerrar sesion
    userBoton.addEventListener("mouseover", () => {
      logoutnone.classList.add("logoutblock");
    });
  
    userBoton.addEventListener("mouseout", () => {
      logoutnone.classList.remove("logoutblock");
    });

    //otros cambios en el renderizado
    containerHome.style.filter = "none";
    userWelcome.innerHTML = `Welcome ${userlogedTrue.name}`;
  
    nav.classList.remove("navNone");
  
    homeTitle.innerHTML = `ITS TIME TO START`;
    homeTitle.style.marginBottom = "6%";
    containerButtomFooterHome.style.display = "none";
  }

  logoutnone.onclick = () => {
    renderuserLogOut(userlogedTrue);
  }
};

const renderuserLogOut= (userlogedTrue) =>{
  spinnerOverlay.classList.remove("spinnerNone");

  setTimeout(() => {
    spinnerOverlay.classList.add("spinnerNone");  
    containerHome.style.filter = "grayscale()"  
    userBoton.style.display = "none";
    nav.classList.add("navNone");
    homeTitle.innerHTML = `Login for more information`;
    homeTitle.style.marginBottom = "0%";
    containerButtomFooterHome.style.display = "flex";
    
    clearInterval(interval);
    document.body.style.backgroundImage = "url(assets/encabezadoOne.jpg)";

    if(userlogedTrue){
      closingSession(userlogedTrue);
    }

    else{
      return;
    }
      
  }, 2000);
}



// Función para cerrar sesión
const closingSession = (userlogedTrue) => {
  user = user.map((userItem) => {
    return userItem.id === userlogedTrue.id
      ? { ...userItem, isLoged: false }
      : userItem;
  });

  nav.classList.add("navNone");

  localStorage.setItem("user", JSON.stringify(user));
  userWelcome.innerHTML = ``;
}

// Función para traer los backgrounds dinámicos
const traerBackgrounds = async () => {
  
  fetch("background.json")
    .then((response) => response.json())
    .then((data) => {
      var backgrounds = data;
      var currentBackground = 0;

      function changeBackground() {
        document.body.style.backgroundImage = `url(${data[currentBackground].background})`;
        currentBackground = (currentBackground + 1) % backgrounds.length;

      }

      interval = setInterval(changeBackground, 5000);
    });
};

// Función de inicialización
const init = () => {
    userLoged(user);
    spinnerOverlay.classList.add("spinnerNone");
  
 // Redirección al login
    gotoLogin.addEventListener("click", () => {
    spinnerOverlay.classList.remove("spinnerNone");
    
    setTimeout(() => {
        spinnerOverlay.classList.add("spinnerNone");
       
        // document.location.href = " https://belen-destefano.github.io/SignInUp/login/login.html";

        document.location.href = "login/login.html";

        // Continuar con la ejecución del script después de redirigir al usuario
    }, 2000);
    });
 //Redirrecion al sign up
    gotocreatebtn.addEventListener("click", () => {
        spinnerOverlay.classList.remove("spinnerNone");
        setTimeout(() => {
          spinnerOverlay.classList.add("spinnerNone");
          document.location.href = "signup/signUp.html";
          // document.location.href = " https://belen-destefano.github.io/SignInUp/signup/signUp.html";

        }, 2000);
    });
};

init();
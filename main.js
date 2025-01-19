const sideBar = document.getElementById("sideBar");
const menu = document.getElementById("menu");
const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none"><path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>`;
const menuIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none"><path d="M4 5L16 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M4 12L20 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M4 19L12 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>`;

menu.addEventListener("click", () => {
  if (sideBar.style.left === "0px") {
    sideBar.style.left = "-100%";
    menu.innerHTML = menuIcon;
  } else {
    sideBar.style.left = "0px";
    menu.innerHTML = closeIcon;
  }
});

const titles = document.querySelectorAll("main  .box-container > div .title");
const box = document.querySelectorAll("main  .box-container > div");
for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("mouseover", () => {
    for (let j = 0; j <= titles.length; j++) {
      if (j === i) {
        titles[j].style.backgroundColor = "#ff9900";
      }
    }
  });

  box[i].addEventListener("mouseleave", () => {
    for (let j = 0; j <= titles.length; j++) {
      if (j === i) {
        titles[j].style.backgroundColor = "#f1efed";
      }
    }
  });
}

// Date auto pour copyright ;
const cr = document.getElementById("cr");
const date = new Date();
const year = date.getFullYear();
if (cr !== null) cr.textContent = `Copyright© ${year}.Tous droit réservés.`;

// animations rélatives au défilement
const target = document.getElementById("layerText");

const intersetionOptions = {
  root: null,
  rootMargin: "0px",
  threhold: 0,
};

const observer = new IntersectionObserver(callback, intersetionOptions);
function callback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0.5) {
      if (entry.target.className !== "layer") {
        entry.target.className = "layer";
      }
    }
  });
}
if (target !== null) {
  observer.observe(target);
}

// Appelle  à l'api 
(function() {
  
  emailjs.init({
    publicKey: "uRjauxwWZDmkeufmf",
  });
})();
// L'envoie de message
if(document.getElementById("userName")!==null){
  const userName = document.getElementById("userName").value;
}
const feedBack = document.getElementById('feedBack');
window.onload = () => {
  const form = document.getElementById("contact-form");
  let contacNumber = 0;
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // appel à la bibliothèque email.js
      emailjs.sendForm("contact_service", "contact_iug_ufp", form ,{
        contact_number:contacNumber++,
        to_name : "Bakara",
        from_name : userName,
      }).then(
        () => {
          console.log("Envoyé avec succès !");
          form.reset();
          feedBack.textContent = "Votre message été envoyé";
          setTimeout(()=>{
            feedBack.textContent = '';
          },2000)
        },
        (error) => {
          console.log("Echec d'envoie...", error);
        }
      );
    });
  }
};


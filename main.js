const sideBar= document.getElementById("sideBar")
const menu = document.getElementById("menu")
const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none"><path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>`
const menuIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none"><path d="M4 5L16 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M4 12L20 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M4 19L12 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>`
menu.addEventListener('click',()=>{
  if(sideBar.style.left =="-200%"){
    sideBar.style.left  = 0
    menu.innerHTML = closeIcon;
  }else{
    sideBar.style.left = "-200%";
    menu.innerHTML = menuIcon
  }
})

const title = document.querySelectorAll("main  .box-container > div .title");
const box = document.querySelectorAll("main  .box-container > div");

for(i=0 ; i<box.length ;i++ ){
  box[i].addEventListener('mousemove' , ()=>{
    // for(j=0;j<title.length;i++){
    //   console.log("ok")
    // }
  })
}
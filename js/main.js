
const darkModeButton = document.getElementById("darkMode");
const lightModeButton = document.getElementById("lightMode");
const bodyElement = document.querySelector("body");

darkModeButton.addEventListener("click", function(event){
    bodyElement.style.backgroundColor = "#000000";
})
lightModeButton.addEventListener("click", function(event){
    bodyElement.style.backgroundColor = "#e7e0cc";
})

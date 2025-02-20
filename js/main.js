
const darkMode = document.getElementById("darkMode")
const bodyElement = document.querySelector("body")

darkMode.addEventListener("click", function(event){
    console.log("button clicket!")
    bodyElement.style.backgroundColor = "#000000"
})


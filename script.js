const btnofpower = document.getElementById("btnofpower");
const addform = document.getElementById("addform");
const form = document.getElementById("input");
const background = document.getElementById("background");
const add = document.getElementById("add");
const cancel = document.getElementById("cancel");

addform.addEventListener("click" , ()=>{
    form.style.display = "block";
    background.style.display = "block";
})
cancel.addEventListener("click", ()=>{
    form.style.display = "none";
    background.style.display = "none";
})
add.addEventListener("click", ()=>{
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const pic = document.getElementById("pic");
    const number = document.getElementById("number");
    const employees = document.getElementById("employees");

    




    form.style.display = "none";
    background.style.display = "none";
})
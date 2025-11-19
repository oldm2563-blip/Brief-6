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
    const select = document.getElementById("selection");

    const thename = name.value.trim();
    const themail = email.value.trim();
    const num = number.value.trim();
    const role = select.value.trim();

    const newempl = document.createElement("div")
    newempl.classList.add("employee");
    newempl.innerHTML = `<h3>${thename} => ${role}</h3> <button class="edit">Edit</button></div>`
    employees.appendChild(newempl);
    form.style.display = "none";
    background.style.display = "none";


    name.value = "";
    email.value = "";
    number.value = "";
    pic.value = "";
    select.value = "Manager"



    newempl.addEventListener("click" , () =>{
        const info = document.getElementById("info");
        const showinfo = document.createElement("div");
        background.style.display = "block";
        info.style.display = "block"
        showinfo.innerHTML = `
        <div class = "theinfo">
        <h1>Name :</h1>
        <h3>${thename}</h2> 
        <h1>Email :</h1>
        <h2>${themail}</h2> 
        <h1>Number :</h1>
        <h2>${num}</h2>
        <h1>Role :</h1>
        <h2>${role}</h2> 
        </div>
        `
        const quit = document.createElement("button")
        quit.classList.add("quit");
        quit.textContent = "Hide";
        quit.addEventListener("click", ()=>{
            background.style.display = "none";
            info.style.display = "none";
            showinfo.remove()
            quit.remove()
        })
        info.appendChild(showinfo);
        info.appendChild(quit);

    })
})

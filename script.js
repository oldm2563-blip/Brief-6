const btnofpower = document.getElementById("btnofpower");
const addform = document.getElementById("addform");
const form = document.getElementById("input");
const background = document.getElementById("background");
const add = document.getElementById("add");
const cancel = document.getElementById("cancel");


addform.addEventListener("click", () => {
    form.style.display = "block";
    background.style.display = "block";
})
cancel.addEventListener("click", () => {
    form.style.display = "none";
    background.style.display = "none";
})
add.addEventListener("click", () => {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const pic = document.getElementById("pic");
    const number = document.getElementById("Phone");
    const employees = document.getElementById("employees");
    const select = document.getElementById("selection");

    const thename = name.value.trim();
    const themail = email.value.trim();
    const num = number.value.trim();
    const role = select.value.trim();
    const link = pic.value.trim();

    const nameRegex = /^[A-Za-z\s]{3,}$/
    const numberRegex = /^[0-9\-\(\)\+\s]{8,20}$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(thename)) {
        alert("not a valid name");
        name.value = "";
        email.value = "";
        number.value = "";
        pic.value = "";
        select.value = "Manager"
        return;
    }
    if (!numberRegex.test(num)) {
        alert("the number needs to be between 8 to 20");
        name.value = "";
        email.value = "";
        number.value = "";
        pic.value = "";
        select.value = "Manager"
        return;
    }
    if (!emailRegex.test(themail)) {
        alert("not a valid email")
        name.value = "";
        email.value = "";
        number.value = "";
        pic.value = "";
        select.value = "Manager"
        return;
    }
    const newempl = document.createElement("div");
    newempl.classList.add("employee");
    newempl.setAttribute("data-role", role)
    newempl.setAttribute("data-name", thename);
    newempl.innerHTML = `<div>
                <img src="${link}" style="width:50px; height:50px; border-radius:50%;">
                </div>
                <div style="text-align: center;">
                    <h3>${thename}</h3>
                    <h3>${role}</h3>
                </div>`
    employees.appendChild(newempl);
    form.style.display = "none";
    background.style.display = "none";

    name.value = "";
    email.value = "";
    number.value = "";
    pic.value = "";
    select.value = "Manager"



    newempl.addEventListener("click", () => {
        const info = document.getElementById("info");
        const showinfo = document.createElement("div");
        background.style.display = "block";
        info.style.display = "block"
        showinfo.innerHTML = `
        <div class = "theinfo">
        <img src="${link}" style="width:200px; height:200px; border-radius:50%;">
        <h1>Name :</h1>
        <h2>${thename}</h2> 
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
        quit.addEventListener("click", () => {
            background.style.display = "none";
            info.style.display = "none";
            showinfo.remove()
            quit.remove()
        })
        info.appendChild(showinfo);
        info.appendChild(quit);

    })
})



const btnsofpower = document.querySelectorAll(".add-zone");

btnsofpower.forEach(btn => {
    btn.addEventListener("click", () => {
        const zone = btn.parentElement;
        const zoneName = zone.dataset.zone;

        const employees = document.querySelectorAll(".employee");
        const fitemployees = Array.from(employees).filter(emp => {
            return !emp.dataset.zone && check(emp.dataset.role, zoneName);
        })

        const zonning = document.getElementById("zonning");
        let thezoner = document.getElementById("thezoner");


        thezoner.innerHTML = "";
        const defoption = document.createElement("option");
        defoption.value = "";
        defoption.textContent = "Select an employee";
        defoption.selected = true;
        defoption.disabled = true;
        thezoner.appendChild(defoption);


        fitemployees.forEach(emplo => {
            const options = document.createElement("option");
            options.value = emplo.dataset.name;
            options.textContent = `${emplo.dataset.name} => ${emplo.dataset.role}`;
            thezoner.appendChild(options);
        })

        zonning.style.display = "block";
        background.style.display = "block";

        thezoner.replaceWith(thezoner.cloneNode(true));
        thezoner = document.getElementById("thezoner");

        thezoner.selectedIndex = 0;

        thezoner.addEventListener("change", () => {
            const selected = thezoner.value;
            const selectedemp = Array.from(employees).find(e => e.dataset.name === selected)

            if (selectedemp) {

                const zonecont = zone.querySelector(".zone-employees");
                selectedemp.dataset.zone = zoneName;

                selectedemp.querySelector("fire")?.remove();

                const removeBtn = document.createElement("button");
                removeBtn.textContent = "Remove";
                removeBtn.classList.add("fire");
                removeBtn.style.marginLeft = "10px";
                removeBtn.style.cursor = "pointer";

                removeBtn.addEventListener("click", () => {
                    document.getElementById("employees").appendChild(selectedemp);
                    delete selectedemp.dataset.zone
                    removeBtn.remove()
                })

                zonecont.appendChild(selectedemp);
                selectedemp.appendChild(removeBtn);
                selectedemp.dataset.zone = zoneName;

                    zonning.style.display = "none";
                background.style.display = "none";
            }
        })

    })
})

function check(role, zone) {
    if (zone === "Conference Room" || zone === "Staff Room") { return true; }
    if (role === "Manager") { return true; }
    if (role === "Reception" && zone === "Reception") { return true; }
    if (role === "IT" && zone === "Server Room") { return true; }
    if (role === "Security" && zone === "Security Room") { return true; }
    if (role === "Janator" && zone !== "Archives") { return true; }
    return false;
}


document.getElementById("hidezonner").addEventListener("click", () => {
    zonning.style.display = "none";
    background.style.display = "none";
})
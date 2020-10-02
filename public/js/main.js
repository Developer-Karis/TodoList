let myInput = document.getElementById("myInput");

let myButtonTask = document.getElementById("myButtonTask");

let divApp = document.getElementById("div-app");

// Quand on clique sur le bouton Ajouter

let createDiv;

let iconFini;
let iconModif;
let iconDelete;

myButtonTask.addEventListener("click", () => {
    createDiv = document.createElement("div");
    createDiv.innerText = myInput.value;
    createDiv.setAttribute("class", "div-item");
    divApp.prepend(createDiv);

    // Icon Fini
    iconFini = document.createElement("i");
    iconFini.setAttribute("class", "fas fa-check-circle fa-2x");
    iconFini.style.color = "#0AC0EF";
    divApp.appendChild(iconFini);

    // Icon Modif
    iconModif = document.createElement("i");
    iconModif.setAttribute("class", "fas fa-edit fa-2x");
    iconModif.style.color = "orange";
    divApp.appendChild(iconModif);

    // Icon Delete
    iconDelete = document.createElement("i");
    iconDelete.setAttribute("class", "fas fa-trash-alt fa-2x");
    iconDelete.style.color = "red";
    divApp.appendChild(iconDelete);

    if (myInput.value == "") {
        createDiv.style.display = "none";
        iconFini.style.display = "none";
        iconModif.style.display = "none";
        iconDelete.style.display = "none";
    }
    myInput.value = "";
});

// Les touches du clavier

myInput.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        createDiv = document.createElement("div");
        createDiv.innerText = myInput.value;
        createDiv.setAttribute("class", "div-item");
        divApp.prepend(createDiv);

        // Icon Fini
        iconFini = document.createElement("i");
        iconFini.setAttribute("class", "fas fa-check-circle fa-2x");
        iconFini.style.color = "#0AC0EF";
        divApp.appendChild(iconFini);

        // Icon Modif
        iconModif = document.createElement("i");
        iconModif.setAttribute("class", "fas fa-edit fa-2x");
        iconModif.style.color = "orange";
        divApp.appendChild(iconModif);

        // Icon Delete
        iconDelete = document.createElement("i");
        iconDelete.setAttribute("class", "fas fa-trash-alt fa-2x");
        iconDelete.style.color = "red";
        divApp.appendChild(iconDelete);

        if (myInput.value == "") {
            createDiv.style.display = "none";
            iconFini.style.display = "none";
            iconModif.style.display = "none";
            iconDelete.style.display = "none";
        }
        myInput.value = "";
    }
})
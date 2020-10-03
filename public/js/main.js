let myInput = document.getElementById("myInput");

let myButtonTask = document.getElementById("myButtonTask");

let divApp = document.getElementById("div-app");

let createTask;
let iconFini;
let iconModif;
let iconDelete;
let para;
let spanIcons;
let createButtonOne;
let createButtonTwo;
let createButtonThree;

// Quand on clique sur le bouton Ajouter

myButtonTask.addEventListener("click", (e) => {
    createTask = document.createElement("div");
    createTask.setAttribute("class", "item");
    divApp.appendChild(createTask);

    // Créer le paragraphe
    para = document.createElement("p");
    divApp.prepend(para);
    createTask.prepend(para);
    para.innerText = myInput.value;

    // Créer le span
    spanIcons = document.createElement("span");
    spanIcons.setAttribute("id", "spanIcons");
    createTask.appendChild(spanIcons);

    createButtonOne = document.createElement("button");
    spanIcons.appendChild(createButtonOne);

    createButtonOne.addEventListener("click", (e) => {
        // Récupérer les 3 buttons Valider, Modifier, Supprimer
        let arr = Array.from(e.target.parentElement.parentElement.children);
        if (e.target.nodeName == "I") {
            e.target.parentElement.parentElement.parentElement.style.backgroundColor = "#40A745";
            e.target.parentElement.parentElement.parentElement.style.color = "white";
            arr.forEach(element => {
                element.style.backgroundColor = "#40A745";
            });
        }
    })

    createButtonTwo = document.createElement("button");
    spanIcons.appendChild(createButtonTwo);

    createButtonTwo.addEventListener("click", () => {
        console.log("Modifier ton texte ! ");
    })

    createButtonThree = document.createElement("button");
    spanIcons.appendChild(createButtonThree);

    createButtonThree.addEventListener("click", () => {
        console.log("Supprimer une tâche");
    })

    // Icon Fini
    iconFini = document.createElement("i");
    iconFini.setAttribute("class", "fas fa-check-circle fa-2x");
    iconFini.style.color = "#0AC0EF";
    createButtonOne.appendChild(iconFini);

    // Icon Modif
    iconModif = document.createElement("i");
    iconModif.setAttribute("class", "fas fa-edit fa-2x");
    iconModif.style.color = "orange";
    createButtonTwo.appendChild(iconModif);

    // Icon Delete
    iconDelete = document.createElement("i");
    iconDelete.setAttribute("class", "fas fa-trash-alt fa-2x");
    iconDelete.style.color = "red";
    createButtonThree.appendChild(iconDelete);

    // Créer chaque boutons pour chaque icon
    if (myInput.value == "") {
        createTask.style.display = "none";
        iconFini.style.display = "none";
        iconModif.style.display = "none";
        iconDelete.style.display = "none";
        createButtonOne.style.display = "none";
        createButtonTwo.style.display = "none";
        createButtonThree.style.display = "none";
    }
    myInput.value = "";
});

// Les touches du clavier

myInput.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        createTask = document.createElement("div");
        createTask.setAttribute("class", "item");
        divApp.appendChild(createTask);

        // Créer le paragraphe
        para = document.createElement("p");
        divApp.prepend(para);
        createTask.prepend(para);
        para.innerText = myInput.value;

        // Créer le span
        spanIcons = document.createElement("span");
        spanIcons.setAttribute("id", "spanIcons");
        createTask.appendChild(spanIcons);

        createButtonOne = document.createElement("button");
        spanIcons.appendChild(createButtonOne);

        createButtonOne.addEventListener("click", (e) => {
            // Récupérer les 3 buttons Valider, Modifier, Supprimer
            let arr = Array.from(e.target.parentElement.parentElement.children);
            if (e.target.nodeName == "I") {
                e.target.parentElement.parentElement.parentElement.style.backgroundColor = "#40A745";
                e.target.parentElement.parentElement.parentElement.style.color = "white";
                arr.forEach(element => {
                    element.style.backgroundColor = "#40A745";
                });
            }
        })

        createButtonTwo = document.createElement("button");
        spanIcons.appendChild(createButtonTwo);

        createButtonTwo.addEventListener("click", () => {
            console.log("Modifier ton texte ! ");
        })

        createButtonThree = document.createElement("button");
        spanIcons.appendChild(createButtonThree);

        createButtonThree.addEventListener("click", () => {
            console.log("Supprimer une tâche");
        })

        // Icon Fini
        iconFini = document.createElement("i");
        iconFini.setAttribute("class", "fas fa-check-circle fa-2x");
        iconFini.style.color = "#0AC0EF";
        createButtonOne.appendChild(iconFini);

        // Icon Modif
        iconModif = document.createElement("i");
        iconModif.setAttribute("class", "fas fa-edit fa-2x");
        iconModif.style.color = "orange";
        createButtonTwo.appendChild(iconModif);

        // Icon Delete
        iconDelete = document.createElement("i");
        iconDelete.setAttribute("class", "fas fa-trash-alt fa-2x");
        iconDelete.style.color = "red";
        createButtonThree.appendChild(iconDelete);

        // Créer chaque boutons pour chaque icon
        if (myInput.value == "") {
            createTask.style.display = "none";
            iconFini.style.display = "none";
            iconModif.style.display = "none";
            iconDelete.style.display = "none";
            createButtonOne.style.display = "none";
            createButtonTwo.style.display = "none";
            createButtonThree.style.display = "none";
        }
        myInput.value = "";
    }
})
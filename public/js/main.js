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
let renamePara;
let confirmRename;
let confirmDelete;

// Quand on clique sur le bouton Ajouter

let startTodoList = () => {
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

            e.target.parentElement.parentElement.firstElementChild.className = "animate__animated animate__heartBeat";

            // Petite animation pour faire disparaître les tâches après 2 secondes
            setTimeout(() => {
                e.target.parentElement.parentElement.parentElement.style.display = "none";
            }, 3000);

            e.target.parentElement.parentElement.parentElement.style.color = "white";
            arr.forEach(element => {
                element.style.backgroundColor = "#40A745";
            });
            e.target.parentElement.parentElement.firstElementChild.nextElementSibling.style.display = "none";

            e.target.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.style.display = "none";
            e.target.style.color = "black";
        }
        e.target.parentElement.parentElement.firstElementChild.disabled = true;
    })

    createButtonTwo = document.createElement("button");
    spanIcons.appendChild(createButtonTwo);

    createButtonTwo.addEventListener("click", (e) => {
        if (e.target.nodeName == "I") {
            // Ne pas afficher le button Valider, Edit et Supprimer
            e.target.parentElement.parentElement.firstElementChild.style.display = "none";
            e.target.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.style.display = "none";


            // Créer un input pour renommer la tâche
            renamePara = document.createElement("input");
            renamePara.setAttribute("id", "renamePara");

            e.target.parentElement.parentElement.parentElement.prepend(renamePara);
            e.target.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling.style.display = "none";

            e.target.parentElement.parentElement.parentElement.firstElementChild.value =
                e.target.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling.innerText;

            // Bouton de confirmation pour renommer
            confirmRename = document.createElement("button");
            confirmRename.innerText = "Renommer";
            e.target.parentElement.parentElement.parentElement.appendChild(confirmRename);

            confirmRename.addEventListener("click", () => {
                // Mettre le nouveau Texte dans le paragraphe
                e.target.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling.innerText =
                    e.target.parentElement.parentElement.parentElement.firstElementChild.value;

                // Afficher le paragraphe
                e.target.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling.style.display = "block";

                // Input pour Renommer la tâche
                e.target.parentElement.parentElement.parentElement.firstElementChild.style.display = "none";

                // Button de confirmation pour renommer la tâche
                e.target.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "none";
                e.target.parentElement.parentElement.parentElement.lastElementChild.style.display = "none";

                // Réafficher les buttons Valider et Supprimer
                e.target.parentElement.parentElement.firstElementChild.style.display = "block";
                e.target.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.style.display = "block";
            })
        }
        e.target.parentElement.parentElement.firstElementChild.nextElementSibling.disabled = true;
    })

    createButtonThree = document.createElement("button");
    spanIcons.appendChild(createButtonThree);

    createButtonThree.addEventListener("click", (e) => {
        if (e.target.nodeName == "I") {
            // Ne pas afficher les buttons Valider et Editer
            e.target.parentElement.parentElement.firstElementChild.style.display = "none";
            e.target.parentElement.parentElement.firstElementChild.nextElementSibling.style.display = "none";

            e.target.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.className = "animate__animated animate__heartBeat";

            confirmDelete = document.createElement("button");
            confirmDelete.innerText = "Supprimer";
            confirmDelete.setAttribute("id", "confirmDelete");
            confirmDelete.style.backgroundColor = "red";
            e.target.parentElement.parentElement.parentElement.appendChild(confirmDelete);

            confirmDelete.addEventListener("click", () => {
                e.target.parentElement.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement.parentElement);
            })
        }
        e.target.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.disabled = true;
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

// La touche Enter pour créer une tâche
myInput.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        startTodoList();
    }
})

// Le button Ajouter lorsqu'on clique dessus
myButtonTask.addEventListener("click", () => {
    startTodoList();
});

// Gérer les filtres

let buttonTodo = document.getElementById("buttonFiltre").children[0];
let buttonDone = document.getElementById("buttonFiltre").children[1];
let buttonAll = document.getElementById("buttonFiltre").children[2];

let verifFiltre = (e) => {
    let arrItem = Array.from(e.target.parentElement.parentElement.parentElement.parentElement.lastElementChild.children);
    arrItem.forEach(element => {
        if (e.target == buttonTodo) {
            if (element.style.backgroundColor != "rgb(64, 167, 69)") {
                element.style.display = 'flex';
            } else if (element.style.backgroundColor == "rgb(64, 167, 69)") {
                element.style.display = 'none';
            }
        } else if (e.target == buttonDone) {
            if (element.style.backgroundColor != "rgb(64, 167, 69)") {
                element.style.display = 'none';
            } else if (element.style.backgroundColor == "rgb(64, 167, 69)") {
                element.style.display = 'flex';
            }
        } else if (e.target == buttonAll) {
            element.style.display = 'flex';
        }
    });
}

buttonTodo.addEventListener("click", verifFiltre);

buttonDone.addEventListener("click", verifFiltre);

buttonAll.addEventListener("click", verifFiltre);

// Mettre les filtres en active

let header = document.getElementById("buttonFiltre");
let btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

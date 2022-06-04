const elForm = document.querySelector(".form");
const elInputName = document.querySelector(".input-name");
const elInputRelation = document.querySelector(".input-relationship");
const elInputPhone = document.querySelector(".input-phone");
const elContact = document.querySelector(".contact");

let dates = [];

elForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputNameValue = elInputName.value;
    const inputRelationValue = elInputRelation.value;
    const inputPhoneValue = elInputPhone.value;

    let materials = {
        name:inputNameValue,
        relation: inputRelationValue,
        phone: inputPhoneValue
    }

    dates.push(materials);

        elInputName.value = null;
        elInputRelation.value = null;
        elInputPhone.value = null;

        elContact.innerHTML = null;

        for(item of dates){
            const createContact = document.createElement("contact");
            const createNameP = document.createElement("p");
            const createRelationP = document.createElement("p");
            const createPhoneP = document.createElement("p");

            createNameP.textContent =`${item.name}`;
            createRelationP.textContent = `${item.relation}`;
            createPhoneP.textContent = `${item.phone}`

            createContact.appendChild(createNameP);
            createContact.appendChild(createRelationP);
            createContact.appendChild(createPhoneP);

            elContact.appendChild(createContact);

            createContact.classList.add("contact")
        }
    })
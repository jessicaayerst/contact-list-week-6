import apiManager from "./apiManager.js"
import contactListPrinter from "./contactList.js"

// get contacts from json server
apiManager.getAllContacts().then(parsedContacts => {
    // loop through contacts from json server
    parsedContacts.forEach(contact => {

        contactListPrinter.printSingleEntry(contact)
    })
});

// collect form field values
// use doc.querySel to select your input fields
// use .value property on input field elements to get the text that was typed
document.querySelector("#contact-submit-btn").addEventListener("click", function() {
    const nameInput = document.querySelector("#contact-name-input").value;
    const phoneInput = document.querySelector("#contact-phone-input").value;
    const emailInput = document.querySelector("#contact-email-input").value;

    const newContactEntry = {
        name: nameInput,
        phone: phoneInput,
        email: emailInput
    };

    // use POST method to create resources
    // use FETCH to create contact entry in the API. the code below saves the contact info to the API
    apiManager.postOneContact(newContactEntry)
    .then(apiManager.getAllContacts)
    .then(parsedEntries => {
        document.querySelector("#contact-output-container").innerHTML = ""
        // loop through the contacts from json server
        parsedEntries.forEach(contact => {
            contactListPrinter.printSingleEntry(contact)
        });
    });
});

// --------CLICK EVENT FOR DELETE BUTTONS------
// add event listener to the body element because the delete button does not exist upon page load.
document.querySelector("body").addEventListener("click", () => {
    // if the user clicks on the delete button, do some stuff
    if(event.target.id.includes(""))
})
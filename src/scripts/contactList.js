import htmlBuilder from "./contactCard"

// Module that contains function to print entire contact list to DOM

const contactListPrinter = {
    printSingleEntry: (singleContactEntry) => {

        // build html string for single entry
        const htmlString = htmlBuilder.buildSingleEntry(singleContactEntry)

        // add html string to DOM
        document.querySelector("#contact-output-container").innerHTML += htmlString;
    }

}

export default contactListPrinter
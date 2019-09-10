const apiManager = {
    // method to get all contacts
    getAllContacts: () => {
        return fetch("http://localhost:3000/contacts").then(response => response.json()
        );
    },
    // method to get one contact
    getOneContact: contactId => {
        return fetch(`http://localhost:3000/contacts/${contactId}`).then(response =>
          response.json()
        );
      },
    // method to post one student
    postOneContact: singleContactObject =>
        fetch("http://localhost:3000/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(singleContactObject)
        }),
    // method to delete one contact
    deleteOneContact: (id) =>
        fetch(`http://localhost:3000/contacts/${id}`, {
            method: "DELETE"
        }),
     // method to edit one student
     editOneContact: (id, contactObject) => {
        return  fetch(`http://localhost:3000/contacts/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(contactObject)
          })
    }
};

export default apiManager;
// Build HTML string for individual contact card(entry)

const htmlBuilder = {
    buildSingleEntry: (singleEntry) => {
        return `
        <div class="entryCard">
        <section id="contact-card-${singleEntry.id}">
        <h3>Name: ${singleEntry.name}</h3>
        <h4>Phone Number: ${singleEntry.phone}</h4>
        <p>Email Address: ${singleEntry.email}</p>
        <button id="delete-entry-${singleEntry.id}">Delete</button>
        <button id="edit-entry-${singleEntry.id}">Edit</button>
        </section>
        </div>
        `;
    }
}


export default htmlBuilder
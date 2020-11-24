class UI {
    addPersonToTable(person) {
        // create tr
        const tr = document.createElement('tr');
        //create all td with person info
        tr.innerHTML = `<td>${person.firstName}</td>
                        <td>${person.lastName}</td>
                        <td>${person.city}</td>
                        <td>${person.street}</td>
                        <td>${person.postcode}</td>
                        <td>${person.phone}</td>
        `;
        // append tr to table
        contacts.appendChild(tr);
    }
}
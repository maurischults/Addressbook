// define variables
// contact data
const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const city = document.querySelector('#city');
const street = document.querySelector('#street');
const postCode = document.querySelector('#postcode');
const phone = document.querySelector('#phone');
const contact = [firstName, lastName, city, street, postCode, phone];

// app data
const form = document.querySelector('#contact-form');
const contacts = document.querySelector('#contacts-table');

// define event listeners
// add contact to table - submit button
form.addEventListener('submit', addContact);

// project functions
// addContact
function addContact(e) {
    if (firstName.value === '') {
        alert("Add new contact data!")
    } else {
        console.log("Create contact");
        // create tr
        const tr = document.createElement('tr');

        contact.forEach(function (contactData) {
            // create td
            const td = document.createElement('td');
            // add contact value to td
            td.appendChild(document.createTextNode(contactData.value));
            // append td to tr
            tr.appendChild(td);
        });
        // append tr to table
        contacts.appendChild(tr);
        console.log(contacts);
        e.preventDefault();
    }
}
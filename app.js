// define variables
// contact data
const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const city = document.querySelector('#city');
const street = document.querySelector('#street');
const postcode = document.querySelector('#postcode');
const phone = document.querySelector('#phone');
const contact = [firstName, lastName, city, street, postcode, phone];

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
        const person = new Person(firstName.value, lastName.value, city.value, street.value, postcode.value, phone.value);
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
        console.log(contacts);
        e.preventDefault();
    }
}




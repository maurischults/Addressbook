class LS {
    saveContact(person) {
        //get persons data from local storage
        let persons;
        //if data doesnt exit
        if (localStorage.getItem('persons') === null) {
            persons = [];
        } else {
            //data exists
            persons = JSON.parse(localStorage.getItem('persons'));
        }
        persons.push(person);
        localStorage.setItem('persons', JSON.stringify(persons));
    }

    getContacts() {
        //get persons data from local storage
        let persons;
        //if data doesnt exit
        if (localStorage.getItem('persons') === null) {
            persons = [];
        } else {
            //data exists
            persons = JSON.parse(localStorage.getItem('persons'));
        }
        return persons;
    }

    deleteContact(firstname, lastname) {
        //get all data from ls
        const persons = this.getContacts();
        persons.forEach(function (person, index) {
            if (person.firstName === firstname && person.lastName === lastname) {
                persons.splice(index, 1);
            }
        });
        localStorage.setItem('persons', JSON.stringify(persons));
        return true;
    }
}
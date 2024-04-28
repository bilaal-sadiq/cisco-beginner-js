// Declare and Intialise Variables 

let contacts = [
     {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
    },
    
   {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    },
]
// New contact

let newContact = {
    name: "Maisie Haley",
    phone: "0913 531 3030",
    email: "risus.Quisque@urna.ca"
}

// Use Prompt to get data for new contact

let newName = prompt("Enter your name")
let newPhone = prompt("Enter your phone number")
let newEmail = prompt("Enter your email address")

// Create new contact 

let addContact = {
    name: newName,
    phone: newPhone,
    email: newEmail
}

// Push array to the end of original array

contacts.push(addContact);

// Length property used to determine last index in element

let firstContact = contacts [0];
let lastContact = contacts[contacts.length - 1];

// Display information in console for contact1 & contact3 using .length

console.log(`${firstContact.name} / ${firstContact.phone} / ${firstContact.email}`);
console.log(`${lastContact.name} / ${lastContact.phone} / ${lastContact.email}`); 







// object literal
let person = {
    firstName: 'Bill',
    lastName: 'Davis',
    welcomeMessage: function () {
        return 'Welcome ' + this.firstName + ' ' + this.lastName + '!';
    }
};

// object properties can be used:
console.log(person.firstName);
console.log(person.lastName);
console.log(person.welcomeMessage());
// object literal
let person = {
    firstName: 'Bill',
    lastName: 'Davis',
    toString: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

// object properties can be used:
console.log(person.toString());
let george, chad;
function person(first_name, last_name) {
  return {
    first_name: first_name,
    last_name: last_name,
    toString: function () {
      return this.first_name + ' ' + this.last_name;
    }
  }
}

// call function
george = new person("George", "Brown");
chad = new person("Chad", "Hill");

console.log(george);
console.log(chad);
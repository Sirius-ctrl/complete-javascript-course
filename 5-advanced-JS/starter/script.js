let Person = function(firstName, DoB) {
    this.firstName = firstName;
    this.DoB = DoB;
}

Person.prototype.secondName = "Hop";

let john = new Person("what", 1998);
john.secondName = "Bob";
console.log(john.secondName);

years = [1,2,3,4,5];

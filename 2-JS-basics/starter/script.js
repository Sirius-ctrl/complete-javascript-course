let year = new Array(1, 2, 3, 4, 5, 6);
console.log(year);

let func = function(a, b) {
    return a+b;
}

console.log(year.reduce(func));

let john = {
    firstName: 'John',
    birthYear: 1967,
    calcAge: function() {
        return 2020-this.birthYear;
    }
}

console.log(john.calcAge());

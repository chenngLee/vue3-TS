var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return User;
}());
function greeter(person) {
    return "hello, " + person.firstName + " " + person.lastName;
}
var user_ = new User("Yee", "Hung");
console.log(greeter(user_));

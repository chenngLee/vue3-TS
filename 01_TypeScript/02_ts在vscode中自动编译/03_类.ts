// 类
interface IPerson {
	firstName: string;
	lastName: string;
}

class User {
	fullName: string;
	lastName: string;
	firstName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.fullName = firstName + " " + lastName;
	}
}

function greeter(person: IPerson) {
	return "hello, " + person.firstName + " " + person.lastName;
}

let user_ = new User("Yee", "Hung");

console.log(greeter(user_));

/**
 * 通过 getters/setters 来截取对对象成员的访问。
 * 它能帮助我们有效的控制对对象成员的访问
 *
 */

(() => {
	// 外部可以传入姓氏和名字数据，同时使用set 和get 控制姓名的数据，外部也可以进行修改操作
	class Person {
		firstName: string;
		lastName: string;

		constructor(firstName: string, lastName: string) {
			this.firstName = firstName;
			this.lastName = lastName;
		}

		// 读取器 --- 负责读取数据
		get fullName() {
			console.log("get中...");
			return this.firstName + "_" + this.lastName;
		}

		// 设置器 --- 负责设置数据（修改）
		set fullName(name) {
			console.log("set中...");
			const names = name.split("_");
			this.firstName = names[0];
			this.lastName = names[1];
		}
	}
	// 实例化对象
	const person = new Person("东方", "不败");
	console.log(person);
	// 获取改属性成员属性
	console.log(person.fullName);
	person.fullName = "诸葛_孔明";
	console.log(person.fullName);
})();

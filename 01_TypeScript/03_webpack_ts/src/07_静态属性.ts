/**
 * 截至目前，只讨论了类的实例成员那些仅当类被实例化的时候才会被初始化的属性。
 * 我们可以创建类的静态成员，这些属性存在于类本身上，而不是类的实例上。
 * 关键字 static
 * 静态属性及静态方法
 *
 */

(() => {
	// 外部可以传入姓氏和名字数据，同时使用set 和get 控制姓名的数据，外部也可以进行修改操作
	class Person {
		name: string;
		static sexy: string; // 静态属性
		constructor(name: string, sexy: string) {
			this.name = name;
			// 此时this是实例对象，sexy是静态属性，
			// 不能通过实例对象直接调用静态属性来使用
			// this.sexy = sexy;
		}

		sayHi() {
			console.log("你好");
		}
	}
	// 实例化对象
	const person = new Person("小甜甜", "女");
	// 通过实例对象调用的属性（实例属性）
	console.log(person.name);
	// 通过实例对象调用的方法（实例方法）
	person.sayHi();
})();

/**
 * 公共、私有与受保护的修饰符
 *
 * 默认 public ：默认值，公开的外部也可以访问  公共的
 * 例如在C#中，要求必须明确地使用 public 指定成员是可见的。在Typesript中，成员都是默认为 public
 *
 * private：私有的，只能在类内部访问        私有的 
 * 当成员被标记成 private 时，它就不能在声明它的类的外部访问，子类也无法访问
 *
 * protected：类内部和子类可以访问         受保护的
 * protected 修饰符与 private 修饰符的行为很相似，但是有一点不同，protected成员在派生类中仍然可以访问
 *
 */

(() => {
	// 定义一个类
	class Person {
		// 类其中一个属性
    // public name:string
    // private name: string
		protected name: String;
		// 构造函数
		constructor(name: string) {
			// 更新属性
			this.name = name;
		}
		// 方法
		eat() {
			console.log(`${this.name},说骨头真好吃`);
		}
	}
	// 定义一个子类
	class Student extends Person {
		// 构造函数
		constructor(name: string) {
			// 子类调用父类的构造函数
			super(name);
		}
		play() {
			console.log(`我就喜欢玩布娃娃，${this.name}`);
		}
	}
	// 实例化对象
	const per = new Person("大蛇丸");
	// 类的外部可以访问类中的属性成员
	// console.log(per.name);
	per.eat();

	// 实例化子类
	const stu = new Student("好色仙人");
	stu.play();
})();

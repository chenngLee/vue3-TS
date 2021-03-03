/**
 * 与 C# 或 Java 里接口的基本作用一样
 * TypeScript 也能够用它来明确的强制一个类去符合某种契约
 *
 * 类的类型可以通过接口实现
 * 
 * 接口继承接口
 * 和类一样，接口也可以相互继承，这让我们能够从一个接口里复制成员到另外一个接口里
 * 可以更灵活地将接口分割到可重用的模块里
 * 
 * 类可以实现一个接口，也可以实现多个接口，注意的是，接口中的内容都要真正的实现
 * 
 * 接口和接口之间是继承（extends），类和接口之间是实现（implements）
 */

(() => {
	// 定义一个接口
	interface IFly {
		// 该方法没有任何实现
		fly(): any;
	}
	// 定义一个类，类的类型就是上面的接口
	// (实际上也可以理解为，IFly接口约束了当前的这个Person类)
	class Person implements IFly {
		// 实现接口中的方法
		fly() {
			console.log("我可以飞了");
		}
	}
	// 实例化对象
	const person = new Person();
	person.fly();

	// 定义一个接口
	interface ISwim {
		swim(): any;
	}

	// 定义一个类，这个类的类型就是IFly 和 ISwim (当前这个类能实现多个接口，一个类，同时也可以被多个接口进行约束)
	class Person2 implements IFly, ISwim {
		fly() {
			console.log("我飞了2")
		}
		swim() {
			console.log("我会游泳")
		}
	}
	// 实例化 person2
	const person2 = new Person2();
	person2.fly();
	person2.swim();

	/**
	 * 总结：类可以通过接口的方式，来定义当前这个类的类型
	 * 类可以实现一个接口，类也可以实现多个接口，要注意，接口中的内容都要真正的实现
	 */


	// 接口可以继承其他的多个接口
	// 定义了一个接口，继承其他的多个接口
	interface IMyFlyAndSwim extends IFly, ISwim { }

	// 定义一个类去实现IMyFlyAndSwim这个接口
	class Person3 implements IMyFlyAndSwim {
		fly() {
			console.log("飞")
		}
		swim() {
			console.log("游泳")
		}
	}
	// 实例化这个类
	const person3 = new Person3()
	person3.swim()
	person3.fly()
	/**
	 * 总结：
	 * 接口和接口之间叫继承（关键字  extends）
	 * 类和接口之间是实现（关键字   implements）
	 */
})();

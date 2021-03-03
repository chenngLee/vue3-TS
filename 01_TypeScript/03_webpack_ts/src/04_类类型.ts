/**
 * 与 C# 或 Java 里接口的基本作用一样
 * TypeScript 也能够用它来明确的强制一个类去符合某种契约
 *
 * 类的类型可以通过接口实现
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
  interface ISwim{
    swim():any;
  }

  // 定义一个类，这个类的类型就是IFly 和 ISwim
})();

/**
 * 接口
 * 是一种类型，一种规范，一种能力
 * 接口是对象的状态（属性）和行为（方法）的抽象（描述）
 *
 * 关键字： Interfaces 来定义对象的类型
 * readonly 与 const
 * 最简单判断该用 readonly 还是 const 的方法是看要把它作为变量还是作为一个属性
 * 作为变量用const，作为属性则使用 readonly
 */

(() => {
	console.log("接口");
	// 定义一个对象，该对象的类型就是我自定义的接口

	interface IPerson {
		readonly id: number;
		name: string;
		age: number;
		sex?: string;
	}
	const person: IPerson = {
		id: 1,
		name: "小李",
		age: 18,
		// sex: "男",
	};
	console.log(person);
	// person.id = 100; // 无法分配到 "id" ，因为它是只读属性。ts(2540)
	person.sex = "女";
	console.log(person);
})();

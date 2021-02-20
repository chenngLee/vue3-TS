// 基础类型
// 基本语法：
// let 变量名：数据类型 = 值
(() => {
	console.log("hello");

	// 布尔类型
	let flag: boolean = true;
	console.log(flag);

	// 数字类型
	let a1: number = 10; // 十进制
	let a2: number = 0b1010; // 二进制
	let a3: number = 0o12; // 八进制
	let a4: number = 0xa; // 十六进制
	console.log(a1, a2, a3, a4);

	// 字符串
	let str: string = "我好了";
	console.log(str);

	let name: string = "tom";
	let age: number = 18;
	const li = `My name is ${name}, I am ${age} years old`;
	console.log(li);

	console.log("==============");
	// 枚举  关键字 enum
	// enum 类型是对 JavaScript 标准数据类型的一个补充。 使用枚举类型可以为一组数值赋予友好的名字。

	enum Color {
		Red = 2,
		Green,
		Pink,
		Blue,
	}
	// 枚举数值默认从0开始依次递增
	// 根据特定的名称得到对应的枚举数值
	let myColor: Color = Color.Green;
	let colorName: string = Color[4];
	console.log(myColor, Color.Red, Color.Blue, colorName); // 3 2 5 "pink"

	console.log("==============");
	// any
	let list: any[] = [1, true, "free"];
	console.log(list);

	list[1] = 100;
	console.log(list);

	console.log("==============");
	// void
	// 某种程度上来说，void 类型像是与 any 类型相反，它表示没有任何类型。
	// 当一个函数没有返回值时，你通常会见到其返回值类型是 void：

	console.log("==============");
	// object 类型
	// 非原始类型
	// 定义一个函数 参数 object 类型，返回值也是object类型

	function getObj(obj: object): object {
		console.log("getObj", obj);
		return {
			name: "卡卡西",
			age: 27,
		};
	}
	console.log(getObj({ name: "鸣人", age: "男" }));

	console.log("==============");

	// 联合类型
})();

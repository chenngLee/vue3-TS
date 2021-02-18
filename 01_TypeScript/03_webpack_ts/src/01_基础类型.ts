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


})();

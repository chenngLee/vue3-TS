// 类型注解是一种轻量级的为函数或变量添加约束的方式
function greeter(person) {
    return 'Hello' + '-' + person;
}
var user = 'Yee';
console.log(greeter(user));

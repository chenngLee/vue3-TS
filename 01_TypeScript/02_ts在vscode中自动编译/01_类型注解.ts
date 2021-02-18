// 类型注解是一种轻量级的为函数或变量添加约束的方式

function greeter2(person: string) {
    return 'Hello' + '-' + person
}

let user2 = 'Yee'

console.log(greeter2(user2))
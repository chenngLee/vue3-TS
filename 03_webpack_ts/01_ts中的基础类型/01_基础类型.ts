(() => {
    console.log("hello");

    //  类型断言：告诉编译器，我知道我自己是什么类型，也知道自己在干什么
    // 类型断言的语法方式1： (<类型>变量名)
    // 类型断言的语法方式2： 值 as 类型
    function getString(str: number | string): number {
        if ((<string>str).length) {
            // return (<string>str).length
            return (str as String).length
        } else {
            return str.toString().length
        }
    }

    console.log(getString(11122))


})()
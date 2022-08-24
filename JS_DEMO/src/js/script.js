console.log('I am Ethan');

let a = 0, b = 1
console.log(a, b);

// 1
{
    let firstName = "Ethan", lastName = "Zhang"
}

// 2
{
    let firstName = "Ethan"
    let lastName = "Zhang"
}

// 3 
{
    let firstName
    let lastName

    firstName = "Ethan"
    lastName = "Zhang"
}

// 4
{
    let firstName
    let lastName
    let middleName //undefined类型
    let None = null //null类型

    firstName = "Ethan"
    lastName = "Zhang"

    thisIsANumber = 76876

    // firstName = 34343

    console.log(firstName, lastName, middleName);
    console.log(thisIsANumber, typeof thisIsANumber);
    console.log(firstName, typeof firstName);
    console.log(middleName, typeof middleName);
    console.log(None, typeof None);

    // 必须用反引号实现如下效果
    let myName = "Ethan Zhang"
    console.log(`Hello ${myName}`);

    /**打/**就可以出来多行注释
     * 不用每行都打//
     */
    let string_a = `he said:
    "abcd"
    'efg'
    `
    console.log(string_a);
    /**TODO: 高亮功能 todo highlight插件
     * FIXME: 用来标记 BUG
     */

}

{
    let a = true
    let b = false

    if (a) {
        console.log('good');
        a = false
    } else {
        console.log('b good');
        if (b) {
            console.log('b bad');
        }
    }
    // 跟python一样if块只会执行一种情况

    if (a) {
        console.log('good');
        a = false
    } else {
        console.log('b good');
        if (b) {
            console.log('b bad');
        }
    }

}

{
    let obj = {
        name: "Ethan",
        age: 18
    } //obj的盒子

    let obj_2 = obj //obj_2指向了同一个盒子
    console.log(obj, obj_2);
    obj_2.age = 30 //盒子里的age被更改
    console.log(obj, obj_2); //obj和obj_2的age都是30，因为都在同一个盒子里

    let a = 1 //a指向了一个盒子
    let b = a //b指向了同一个盒子
    console.log(a, b); //a,b都是1
    b = 2 //b指向了另一个盒子
    console.log(a, b); //a是1，b是2

    let user = {
        name: "Ethan",
        age: 18,
        profile: {
            cv: "https://xxx",
            id: 00001
        }
    }

    let user_2 = {...user} 
        //js独有的展开语法，把user里的内容复制放到新的盒子里
    console.log(user, user_2);
    user_2.name = "EEthan"
    console.log(user, user_2);
    user_2.profile.id = 00002; 
        /**缺陷：展开语法只能浅拷贝，即复制当前的一层，
         * 这里profile是更深的一层，深拷贝失败
        */
    console.log(user, user_2);
}

{
    let array = [1, 2, 3, "4", true, {name: "Ethan"}]
        //和python的区别：js数组中的index不使用负数
    console.log(array);
    console.log(array.length);
    array.length = 4;
        //保留array前四位，如果赋0，array变空[]
    console.log(array);

    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
    }

    array[1] = "change"
    console.log(array);

    const a = 10
    // a = 11 这里会报错，因为常量不能被改变
    console.log(a);

    const array_1 = ["123"]
    const obj_1 = {name: "Ethan"}
    console.log(array_1, obj_1);
    // array_1 = [123] 这里会报错，因为常量不能被改变
    // obj_1 = {} 这里会报错，因为常量不能被改变
    array_1[0] = "321"
    console.log(array_1);
        //常量锁定的是指向盒子的链，但盒子内的内容可以被更改
    array_1[1] = "123"
    console.log(array_1);
        //array本没有1位，但也可以执行
    array_1[3] = "000"
    console.log(array_1);
        //第2位会显示empty，“000”会被放在3位，length此时为4

    obj_1.age = 18
    console.log(obj_1);
    obj_1['middle'] = 'none'
    console.log(obj_1);
        //这两种方法都可以往object里添加内容
    obj_1[100] = '100'
    console.log(obj_1)
        //这里不会像array一样添加98个empty
}

{
    let x =10
    let y = 0
    console.log(x + y);
    console.log(x - y);
    console.log(x * y);
    console.log(x / y); //不会报错，结果是Infinity
    
    y = 3
    console.log(x % y); //求余
    console.log(x ** y); //指数
    console.log(Math.sqrt(100)); //给100开平方根
    console.log(x++); //先使用后相加，输出10
    console.log(x); //输出11
    console.log(x--);
    console.log(x);
    console.log(++x); //先相加后使用，输出11

    x = 3
    y = 1.001
    console.log(x + y); //计算精度损失，结果是4.000999...94
    console.log(x - y);
    console.log(x * y);
    console.log(x / y); 
        //BigInt可以一定程度上解决精度问题

    let z = null ?? 100
    console.log(z); 
    z = 1 ?? 100
    console.log(z);
        /**??左边如果是null或者undefined，返回右边的值
         * ??左边是其余值，返回左边的值
        */
}
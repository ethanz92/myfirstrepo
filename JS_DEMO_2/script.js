console.log("Hello World");

const obj = {}
console.log(obj);
//等效于：
console.log(new Object());

console.log(new Array());
console.log(new Set());
console.log(new Map());

//以下两种用的比较少可以课后研究
console.log(new WeakSet());
console.log(new WeakMap());

const object = new Object()
const array = new Array()
const set = new Set()


// Object:
// assign, create, keys, values, hasOwn

{
    const target = { a: 1, b: 2 }
    const source = { b: 4, c: 5 }

    const returnedTarget = Object.assign(target, source)

    console.log(returnedTarget); //对b的取值后者覆盖前者
    console.log(target); //target也变了，破坏了原来的数据
    console.log(source); //source没变
}

{
    const target = { a: 1, b: 2 }
    const source = { b: 4, c: 5 }

    const returnedTarget = { ...target, ...source }

    console.log(returnedTarget);
    console.log(target); //target没变，未破坏原来的数据
    console.log(source); //source没变
}

// TODO: create

{
    const obj1 = {
        name: "Ethan",
        age: 18
    }

    const obj2 = new Object({
        name: "Ethan",
        age: 18,
        draw: function () {
            console.log(`Name: ${this.name}, Age: ${this.age}`);
        }
    })
    //以上两种写法可暂时理解为等效
    console.log(obj1);
    console.log(obj2);

    const obj3 = Object.create(obj2)
    console.log(obj3); //结果为空{}
    obj3.draw()
    console.log(obj3.name, obj3.age);
    /**这一步结果却能找到name是“Ethan”, age是18
     * create是根据原来的object衍生出新对象
     * 新对象的属性是全新的
     * 但是继承了过去的信息所以如果自己没有name或者age的属性
     * 会向上追溯 property chain
     * 验证：在打印出{}的结果中查看prototype
     * 展开能看到name和age属性
     */
    obj3.name = "EEthan", obj3.age = 1
    console.log(obj3);
    console.log(obj3.name, obj3.age);
    /**此时将会展示新的值
     * 但是在prototype中依然能看到继承来的值
     * 但因为在自己property中能找到对应的值
     * 所以没有向上追溯
     */

}
// TODO: keys, values
{
    const user = {
        name: "Ethan",
        age: 18,
        profile: {
            address: "x.xxx.xx",
            email: "yyy@yy.com"
        },
        draw: function () {
            console.log(`Name: ${this.name}, Age: ${this.age}`);
        }
    }

    const key = Object.keys(user)
    console.log(key); //['name', 'age', 'profile', 'draw']
    const value = Object.values(user)
    console.log(value); //['Ethan', 18, {…}, ƒ]
}

{
    const obj = { a: 1, name: "Ethan", age: 18 }
    const obj2 = { ...obj }
    console.log(obj);
    console.log(obj2);

    // TODO: new和create的区别：

    const obj3 = new Object(obj)
    console.log(obj3);
    obj3.a = 2
    console.log(obj); //obj的a也被改变了
    console.log(obj2);
    console.log(obj3);

    const obj4 = Object.create(obj)
    console.log(obj4); //结果空{}
    obj4.a = 3
    console.log(obj); //obj的a没有被改变
    console.log(obj2);
    console.log(obj3);
    console.log(obj4); //只有obj4的a被改变

    // TODO: hasOwn:

    console.log(Object.hasOwn(obj, "a")); //自身属性返回true
    console.log(Object.hasOwn(obj, "name")); //自身属性返回true
    console.log(Object.hasOwn(obj, "age")); //自身属性返回true
    console.log(Object.hasOwn(obj, "toString"));

    console.log(Object.hasOwn(obj4, "a")); //自身属性返回true，因为obj4只有a
    console.log(Object.hasOwn(obj4, "name")); //非自身属性返回false
    console.log(Object.hasOwn(obj4, "age")); //非自身属性返回false

    //以上等同于：
    console.log(obj4.hasOwnProperty("a")); //自身有无该属性
    console.log(obj4.hasOwnProperty("name"));
    console.log(obj4.hasOwnProperty("age"));

    console.log(obj4.__proto__); //查看obj4的原型，即obj

    console.log(obj.isPrototypeOf(obj4)); //obj是obj4的原型，返回true
    console.log(obj2.isPrototypeOf(obj4)); //obj2不是obj4的原型，返回false
    console.log(obj3.isPrototypeOf(obj4)); //obj3就是obj，所以是obj4的原型，返回true

}

// TODO: Array:

{
    const name = "Ethan   Zhang"
    const arrayName = Array.from(name) //注意有空格也会被分别拆开作为一个元素

    const newArrayName = arrayName.filter(element => element != ' ') //排除掉是' '的元素，即不等于' '的留下
    console.log(arrayName); //返回字母和空格组成的array，字符串被拆开
    console.log(newArrayName); //空格被去掉的array，不可以直接用set去重因为字母a也会被去重

    console.log(Array.isArray(name), typeof name); //false, 'string'
    console.log(Array.isArray(arrayName), typeof arrayName);
    //true, 'object': typeof返回object所以要这样判断是不是array

    console.log(arrayName.join()); //返回结果会有逗号：E,t,h,a,n, , , ,Z,h,a,n,g
    console.log(arrayName.join('')); //用''替换逗号，返回的结果和原来name一样：Ethan   Zhang
    console.log(newArrayName.join('')); //返回EthanZhang
    console.log(newArrayName.join('_')); //返回E_t_h_a_n_Z_h_a_n_g
}

{
    const string = "Hello World I am Ethan"
    const allWords = string.split(' ')
    console.log(allWords); //按照空格拆分成五个词
    console.log(string.split('')); //一个字一个字拆包括空格，和row158效果相同 Array.from(string)
    console.log(allWords.slice(2)); //返回['I', 'am', 'Ethan']，左边0,1不要了
    console.log(allWords.slice(1, 3)); //['World', 'I']，返回1,2（左闭右开）
}

// concat array

{
    const array1 = ['a', 'b', 'c']
    const array2 = ['c', 'd', 'e', 'f']
    const array3 = array1.concat(array2)
    console.log(array3); //拼接，并且会有两个c：['a', 'b', 'c', 'c', 'd', 'e', 'f']
    console.log(array1); //不改变原值
    const array4 = array1 + array2
    console.log(array4, typeof array4); //返回a,b,cc,d,e,f string，所以不能用加号拼接

    const string1 = array1.join('') + array2.join('')
    console.log(string1); //返回abccdef，字符串用+拼接
    console.log(Array.from(string1)); //变回array['a', 'b', 'c', 'c', 'd', 'e', 'f']
}

// find, map

{
    const array1 = [5, 12, 8, 130, 71, 55]
    const found = array1.find(element => element > 40) //寻找超过40的元素
    console.log(found); //返回130，find只能找到从头开始第一个满足条件的元素

    const foundIndex = array1.findIndex(element => element > 40)
    console.log(foundIndex, array1[foundIndex]); //返回3, 130，也就是130的标志位3

    const foundLast = array1.findLast(element => element > 40) //寻找超过40的元素
    console.log(foundLast); //返回55，从后往前找

    const foundLastIndex = array1.findLastIndex(element => element > 40)
    console.log(foundLastIndex, array1[foundLastIndex]); //返回5, 55，也就是55的标志位5

    const filter = array1.filter(element => element > 40)
    console.log(filter); //返回[130, 71, 55]，也就是所有符合条件的元素组成的数组

    const map = array1.map(element => element * 10)
    console.log(map);
    /**[50, 120, 80, 1300, 710, 550]全体*10
     * map用来做group操作
     */
}

// TODO: 以上部分是基础机制


// TODO: 扁平化

{
    const list = [1, 2, [3, 4, 5, [6, [7, 8, 9]]]]
    console.log(list); //[1, 2, Array(4)]

    const newList = list.flat() // 等同于list.flat(1)
    console.log(newList); //打碎一层 [1, 2, 3, 4, 5, Array(2)]

    const newList2 = list.flat(2)
    console.log(newList2); //[1, 2, 3, 4, 5, 6, Array(3)]

    const newList3 = list.flat(3)
    console.log(newList3); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

    const newList4 = list.flat(Infinity)
    console.log(newList4); //用infinity实现彻底扁平效果
}

//FIXME: 迭代器的概念

{
    const obj = {
        1: 'A',
        2: 'B',
        3: 'C'
    }
    console.log(Object.keys(obj)); //['1', '2', '3'] - 此处构造了object，object自带的属性

    const list = ['A', 'B', 'C'] //array原型链上的属性
    console.log(list.keys());
    /**输出Array Iterator {} 
     * 迭代器（iterator），是确使用户可在容器物件（container，例如链表或阵列）上遍访的对象 
     */

    const iter = list.keys() //得到迭代器
    console.log(iter.next().value); //0
    console.log(iter.next().value); //1 next()起到的功能类似for循环，向前推进
    console.log(iter.next().value); //2 注意和上面Object.keys()进行区别

    const iter2 = list.values()
    console.log(iter2.next().value); //0
    console.log(iter2.next().value); //1
    console.log(iter2.next().value); //2
}

// TODO: push/pop

{
    const list = ['A', 'B', 'C']

    console.log(list);
    list.push('D')
    console.log(list); //D加到末尾
    list.push('E')
    console.log(list); //E加到末尾

    list.pop()
    console.log(list); //E被去掉（stack结构）

    //用shift和unshift从stack底部开门：

    list.unshift('F')
    console.log(list); //F加到开头
    list.shift()
    console.log(list); //F被去掉

    //应用：用push往里放，用shift从头拿，实现顺序播放
}

// TODO: sort

{
    const list = [374, 435, 23, 343, 7843, 85]
    const list2 = [...list] //把原list复制一下否则下面执行sort后list本身也会变
    const newList = list.sort((a, b) => a - b) //从小到大：a-b是负值就按a, b排列
    console.log(list);
    console.log(newList);
    const newList2 = list.sort((a, b) => b - a) //从大到小：b-a是负值就按a, b排列
    console.log(list);
    console.log(newList2);

    console.log(list2);

    const list3 = [374, 435, 'a', 23, 343, 'Raymond', 7843, 85]

    const newList3 = list3.sort((a, b) => a - b)
    console.log(newList3);
    /**无法正常完成排序，
     * 输出 [374, 435, 'a', 23, 343, 'Raymond', 85, 7843]
     * 注意后两位变了位置说明发生了一定程度的排序
     */
}

// TODO: array里有非数字元素怎么办？

{
    const list = [374, [435, 'a', [23, 343], 'Raymond'], 7843, 85, 435]

    const flatList = list.flat(Infinity) //扁平化

    function isNumber(something) {
        const result = something === +something // ‘===’严格相等来条件判断 ‘==’是非严格相等
        console.log(result);
        return result
    }
    isNumber(1) //true
    isNumber("1") //false
    isNumber('') //false

    // 基于isNumber函数建立一个filter：

    const filterList = flatList.filter(element => isNumber(element))
    //筛选出数字（只有数字在isNumber能返回true）
    console.log(filterList); // [374, 435, 23, 343, 7843, 85, 435]

    const setList = [...new Set(filterList)]
    console.log(setList); //去重

    const sortList = setList.sort((a, b) => a - b)
    console.log(sortList); //排序
}

// TODO: === v.s. ==

{
    const a = '123'
    const b = 123
    console.log(a, typeof a);
    console.log(b, typeof b);
    console.log(+a, typeof (+a)); //快速把a变成number

    console.log(a == b); //true
    console.log(a === b); //false
    console.log(+a === b); //true
    console.log(+a === a); //false
    console.log(+b === b); //true
}
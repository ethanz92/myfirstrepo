// SECTION Object.keys() 抓取属性

// let profile = {
//     name: 'Rober Dw. Jr',
//     age: 45,
//     work: 'Actor'
// };

// console.log(Object.keys(profile)); //[ 'name', 'age', 'work' ]

// let str = 'abc';
// console.log(Object.keys(str)); //[ '0', '1', '2' ]

// let arr = ['a', 'b', 'c']
// console.log(Object.keys(arr)); //[ '0', '1', '2' ]

// let myObj = {
//     make: "Ferrari",
//     model: "Portofino",
//     fuel: "Petrol",
//     year: 2018,
// };

// let length = Object.keys(myObj).length;
// console.log(length); //4

// >>> key是number：
// let obj = {
//     200: 'a',
//     19: 'b',
//     89:'c',
// }
// console.log(Object.keys(obj)); //[ '19', '89', '200' ] >>>从小到大排序

// SECTION Object.values() 抓取值

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 25,
// };

// // for in + Object.hasOwnProperty() = Ojbect.values()
// let valuesA = []
// for (const key in person) {
//   if (person.hasOwnProperty(key)) {
//     valuesA.push(person[key]);
//   }
// }
// console.log(valuesA); //[ 'John', 'Doe', 25 ]

// const valuesB = Object.values(person);
// console.log(valuesB); //[ 'John', 'Doe', 25 ]

// SECTION Object.entries() 返回一个数组

// const obj = {
//   name: "ben",
//   age: 26,
// };
// console.log(Object.entries(obj)); //[ [ 'name', 'ben' ], [ 'age', 26 ] ]

// SECTION Object.assign() 和 ... 浅拷贝object
// const obj = {
//   name: "ben",
//   age: 26,
// };
// const newObj = Object.assign({}, obj); //assign(target, source)
// console.log(newObj); //{ name: 'ben', age: 26 }

// const obj1 = { first: 1 };
// const obj2 = { second: 2 };
// const obj3 = { third: 3 };
// const newObj = Object.assign({}, obj1, obj2, obj3);
// console.log(newObj); //{ first: 1, second: 2, third: 3 }

// const obj = { some: 'value' }

// const newObj = Object.assign(obj, { other: 'value2' })
// console.log(newObj); //{ some: 'value', other: 'value2' }
// const newObj2 = Object.assign(obj, { some: 'value2' })
// console.log(newObj2); // >>>{ some: 'value2', other: 'value2' } 同样key会覆盖target

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };

// const newObj = { ...obj1, ...obj2 };
// console.log(newObj); //{ a: 1, b: 2, c: 3, d: 4 }

// SECTION Object.freeze() 浅冻结对象（深层可被修改）

// let obj = { name: "ben", age: 22 };
// Object.freeze(obj);

// obj.name = 'Chris';
// console.log(obj); //{ name: 'ben', age: 22 }

// let arr = [1, 2]
// Object.freeze(arr)
// arr[0] = 3;
// console.log(arr); //[ 1, 2 ]

// SECTION Object.seal 无法添加或删除，可以修改

// let obj = { name: "ben", age: 22 };
// Object.seal(obj);
// obj.gender = "male";
// console.log(obj); //{ name: 'ben', age: 22 }
// obj.name = 'ben2'
// console.log(obj); //{ name: 'ben2', age: 22 }

/*
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");
async1();
console.log("script end");
*/

/**
 * script start
 * async1 start
 * async2 >>> await 等待async2的结果，不阻塞进程
 * script end >>> 因为await 让出了进程，这一步会先执行
 * async1 end >>> 脚本执行完后，再执行这一步
 */

/*
const buyFruit = function (fruit) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(fruit);
      resolve(fruit);
    }, 1000);
  });
};

const init = async () => {
  await buyFruit("apple");
  await buyFruit("banana");
  await buyFruit("orange");
};
init();
*/

/**
 * apple
 * banana
 * orange
 */


function foo() {
  Promise.resolve().then((resolve) => {
    console.log("1");
  });
  console.log(3);
}
foo();

/**
 * 3
 * 1
 */


async function foo() {
  await Promise.resolve().then((resolve) => {
    console.log("1");
  });
  console.log(3);
}
foo();

/**
 * 1
 * 3
 */
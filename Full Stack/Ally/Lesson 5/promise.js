//Callback Hell:

// const buyFruit = function (fruit, callback) {
//   setTimeout(() => {
//     console.log(fruit);
//     callback();
//   }, 1000);
// };

// buyFruit("apply", function () {
//   buyFruit("banana", function () {
//     buyFruit("orange", function () {
//       console.log("end");
//     });
//   });
// });

const buyFruit = function (fruit) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(fruit);
      resolve();
    }, 1000);
  });
};

buyFruit("apple")
  .then(function () {
    return buyFruit("banana");
  })
  .then(function () {
    return buyFruit("orange");
  })
  .then(function () {
    console.log("end");
  })
  .catch(function (err) {
    console.log(err);
  });

//每个then和catch都返回一个新的promise

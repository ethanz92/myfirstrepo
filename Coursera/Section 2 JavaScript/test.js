// function addTwoNums(a, b) {
//   try {
//     if (typeof a != "number") {
//       throw new ReferenceError("the first argument is not a number");
//     } else if (typeof b != "number") {
//       throw new ReferenceError("the second argument is not a number");
//     } else {
//       console.log(a + b);
//     }
//   } catch (err) {
//     console.log("Error!", err);
//   }
// }
// addTwoNums(5, "5");
// console.log("It still works");

// function letterFinder(word, match) {
//   let condition1 = typeof word == "string" && word.length >= 2;
//   let condition2 = typeof match == "string" && match.length == 1;
//   if (condition1 && condition2) {
//     for (let i = 0; i < word.length; i++) {
//       if (word[i] == match) {
//         console.log("Found the", match, "at", i);
//       } else {
//         console.log("---No match found at", i);
//       }
//     }
//   } else {
//     console.log("Please pass correct arguments to the function.");
//   }
// }

// letterFinder(2, 22);
// letterFinder("cat", "c");

// console.log(new String('plum') === new String('plum'));
// console.log(new String('plum') == new String('plum'));

// console.log("abcd".match(/d/)); // null
// console.log("abcd".match(/a/)); // ['a', index: 0, input: 'abcd', groups: undefined]

// const m = new RegExp('d');
// console.log("abcd".match(m));

// class Car {
//   constructor(color, speed) {
//     this.color = color;
//     this.speed = speed;
//   }
//   turboOn() {
//     console.log("turbo is on!");
//   }
//   getProto() {
//     console.log(Object.getPrototypeOf(this));
//   }
// }

// const car = new Car("red", 120);
// console.log(Object.getPrototypeOf(car));
// car.getProto();

// const veggies = ["onion", "garlic", "potato"];
// veggies.forEach((veggie, index) => {
//   console.log(`${index}. ${veggie}`);
// });

// const nums = [0, 10, 20, 30, 40, 50];
// console.log(nums.filter((num) => num > 20));

// console.log([0, 10, 20, 30, 40, 50].map((num) => num / 10));

// function handleClicks() {
//   switch(h1.innerText) {
//       case arr[0]:
//           h1.innerText = arr[1];
//           break
//       case arr[1]:
//           h1.innerText = arr[2];
//           break
//       case arr[2]:
//           h1.innerText = arr[3];
//           break
//       default:
//           h1.innerText = arr[0];
//           break
//   }
// }

const [a, b] = [1, 2, 3, 4] 
console.log(b);
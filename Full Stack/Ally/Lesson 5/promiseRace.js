// 只要有一个成功就会返回结果，并且返回更快的那一个

// 比如点击按钮请求，当请求超过3秒未返回数据，提示用户请求超时

const dataOne = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = "data one";
      resolve(data);
    }, 2000);
  });
};
const dataTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = "time out";
      resolve(data);
    }, 3000);
  });
};
const handleBtnClick = () => {
  let arr = [dataOne(), dataTwo()];
  Promise.race(arr).then((res) => {
      console.log("res", res); //res data one
      if (res === 'time out') {
          console.log('request time out');
      } else {
          console.log('continue'); //continue
      }
  });
};
handleBtnClick(); 


// 验证多个请求结果是否都满足条件

const dataOne = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = "first verification";
      resolve(data);
    }, 800);
  });
};
const dataTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = "second verification";
      resolve(data);
    }, 700);
  });
};

const handleBtnClick = () => {
  Promise.all([dataOne(), dataTwo()])
    .then((res) => {
      let verifyResult = res.every((item) => item);
      console.log(
        verifyResult ? "Verification successful" : "verification failed"
      );
    })
    .catch((err) => {
      console.log("Verification failed");
    });
};
handleBtnClick(); //Verification successful

//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// 如果想分开处理，可以用如下方法，注意Promise.all里要加上'.catch()'

const handleBtnClick2 = () => {
    Promise.all([dataOne().catch(err=>err), dataTwo().catch(err=>err)])
      .then((res) => {
          console.log('res', res); //res [ 'first verification', 'second verification' ]
          if (res[0] === 'first verification') {
              //render
          } else {
              //failed logic
          }
          if (res[1] === 'second verification') {
             //render
          } else {
              //failed logic
          }
      })
      .catch((err) => {
        console.log("Verification failed");
      });
  };
  handleBtnClick2();
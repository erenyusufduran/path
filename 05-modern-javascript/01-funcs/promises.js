// const getDataCallback = (num, callback) => {
//   setTimeout(() => {
//     if (typeof num === "number") {
//       callback(undefined, num * 2);
//     } else {
//       callback("Number must be provided");
//     }
//   }, 2000);
// };

// getDataCallback((err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     getDataCallback(data, (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(data);
//       }
//     });
//   }
// });

const getDataPromise = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === "number"
        ? resolve(num * 2)
        : reject("Number must be provided.");
    }, 2000);
  });
};

const myPromise = getDataPromise(123);

myPromise.then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);

getDataPromise(4)
  .then((data) =>
    getDataPromise(data)
      .then((data) => console.log(`Promise data: ${data}`))
      .catch((err) => console.log(err))
  )
  .catch((err) => console.log(err));

// 1 catch method is enough for all then methods. It controls all of them.
getDataPromise(1)
  .then((data) => getDataPromise(data))
  .then((data) => getDataPromise(data))
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

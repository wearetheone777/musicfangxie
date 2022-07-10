new Promise((resolve) => {
  resolve(
    (() => {
      console.log(1);
      return 2;
    })()
  );
  console.log(3);
}).then((arg) => {
  console.log(arg);
});
setTimeout(() => {
  console.log(4);
}, 0);
console.log(5);

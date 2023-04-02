// const printString = (value)=>{
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("성공");
//         reject("거절");
//         console.log(value);
//     },Math.floor(Math.random()*100)+1);

// });

// }


// const printStringAll =()=>{
//  printString('A')
//   .then((value)=>{
//     console.log(value);
//     return printString("B");
//   })
//   .then(()=>{
//     //console.log(value); 안받아왔으므로 오류남.
//     return printString("C");
//   })
//   .catch((error)=>{
//     console.log(error);
//     return error;

//   })
//   .finally(() => {
//     console.log('성공이든 실패든 작동!');
//   });


    


// }

// printStringAll();

// console.log("실행하기 ");

const promise1 = new Promise((resolve, reject) => {
  reject();
});

promise1
  .then(() => {
    console.log("then!");
  })
  .catch(() => {
    console.log("catch!");
  });




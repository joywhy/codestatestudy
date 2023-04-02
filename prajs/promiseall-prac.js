//promise 와 promiseall 의 차이 
//1초 2초 3초 
const promiseOne = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            return resolve("1초");
        }, 1000);
    });
}
const promiseTwo = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            return resolve("2초");
        }, 2000);
    });
}
const promiseThree = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            return resolve("3초");
        }, 3000);
    });
}

Promise.all([promiseOne(),promiseTwo(),promiseThree()])
.then((value)=>{return console.log(value)})
.catch((error)=>{return console.log(error)});
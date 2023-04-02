const printString = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(value);
            console.log(value);
        }, Math.floor(Math.random()*100)+1);

    });
}

const printStringall = async ()=>{
    printString("a")
    await printString("b")
    await printString("c")

}
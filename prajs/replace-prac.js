let str = 'This123is456Java789script';

str = str.replace(/[1-9]/gi, '@'); //This@@@is@@@Java@@@script
console.log(str); //1 2 3 각각의 치환할 요소로 구별해서 판단
let str2 ='This123is456Java789script';//This@is@Java@script
str2= str2.replace(/[1-9]+/gi, '@'); 
console.log(str2); // 123 으로 묶어서 치환할 요소로 판단 

let str3 = "hello";
str3 =str3 *3;
console.log(str3);//nan

function ABCheck(str) {
    // code goes here
    let arr = str.split("");
    console.log(arr);

    arr.map((x,idx,arr)=>{
   console.log(x);
   console.log(idx+4);
  
        let num = idx+4;
        console.log(arr[num]);
      if((x==='a')&&("b"===arr[num])){
        console.log("working");
  
        return true;
        
      }else if(x==='b'&&"a"===arr[num]){
        return true;
      }
    });
    return false;
  
  }

  ABCheck("abecd ut");

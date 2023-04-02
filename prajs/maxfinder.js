//Math.max() 씹고뜯고 맛보고 즐기기 
// 함수는 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환
console.log(Math.max(1,2,-1));//2

console.log(Math.max(-1, -3, -2)); 
// Expected output: -1

console.log(Math.max(   )); //-infinity

console.log(Math.max( "1","2")); //숫자 2반환

let num = Math.max("1","2");
console.log(typeof num); // number

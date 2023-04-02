//다른 사람 풀이
function solution(price) {
const discounts = [
    [500000, 20],
    [300000, 10],
    [100000,  5],
]

const solution = (price) => { //이게왜 콜백함수 ? 화살표 함수 
    // 사실 이런것 .? 왜 .. 너 처음보냐... function() { return function (price){})} 
    for (const discount of discounts) //배열 순회 for of 문
        if (price >= discount[0]) //50만원 이상   30만원이상 50만원미만   10만원이상 30만원미만
            return Math.floor(price - price * discount[1] / 100)
    //         console.log(2);
    // console.log(price);
    // console.log(1);
    return price

}

}


solution(100000);
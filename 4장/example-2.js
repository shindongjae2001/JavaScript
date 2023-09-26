// 두 수를 전달 받아 곱셈하는 함수 정의
let mul = (a,b) => { return a * b;}

// 두 정수 입력 받기
let num1 = parseInt(prompt("첫번째 정수 입력 :"));
let num2 = parseInt(prompt("두번째 정수 입력 :"));


//결과 화면에 출력하기
document.write(`<h2>${num1}*${num2} = ${mul(num1,num2)}</h2>`);
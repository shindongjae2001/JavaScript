//두 수를 입력 받아 곱한 결과를 리턴하여 화면에 출력하는 함수
//1~10까지 합계를 계산하는 함수
//함수 선언.
function calcSum(num1,num2) {
    return num1*num2;

}

//사용자로부터 정수 입력 받기
let num1 = parseInt(prompt("첫번째 정수입력 :"))
let num2 = parseInt(prompt("두번째 정수입력 :"))



//입력 받은 수를 인수로 함수 호출
document.write(`<h1>${num1}와 ${num2}의 곱은 ${calcSum(num1,num2)}입니다.</h1>`)

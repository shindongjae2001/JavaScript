function sum (num1,num2) {
    var result = num1 + num2 ;     //지역변수(지역스코프)
}

sum(10,20);
console.log(result);               //선언된 변수X(result가 없음),오류 발생
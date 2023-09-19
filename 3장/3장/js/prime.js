// 소수 판단 스크립트
//정수를 입력 받는다. 프롬프트
//소수는 1을 제외한 자기 자신으로 나누어 떨어지는 수.
//나누어 떨어진다 = 나머지가 0이다.
let ess = parseInt(prompt("정수를 입력하시오. :"));
let cnum = 0;
if(ess==1){
    document.write("소수가 아닙니다.")
}
else{
    for(i=2;i<ess;i++){
        if(ess % i == 0) {
           cnum +=1;
       }
    }    
} 
if(cnum != 0) {
    document.write("소수가 아닙니다.");
}
else {
    document.write("소수입니다.");
}


let Date1 = new Date();
let BirthDay = new Date("2001-05-29");
const result = document.querySelector("#result");

//시작한 날부터 오늘까지 흐른 시간(밀리초)
let passedTime = Date1.getTime() - BirthDay.getTime();

//밀리초를 일수로 계산
let passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));

//결과 출력
result.innerText = passedDay;

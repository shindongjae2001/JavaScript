const student = {                //객체선언할 때는 const
    major : "컴퓨터공학부",       //major,idNum등은 key역할,
    idNum : 202095050,           //컴퓨터공학부, 202095050등은 value역할
    name: '신동재'
}

for(key in student) {
    document.write(`${key} : ${student[key]}<br>`)   //key값의 value값을 출력하고 싶으면 []을 이용하면 출력 가능 
}
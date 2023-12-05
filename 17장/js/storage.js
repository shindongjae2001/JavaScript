let students = ["Kim","Lee","Park"];
console.log(`현재 studnets : ${students}`);
//스토리지에 students 키로 배열을 저장
localStorage.setItem("students",JSON.stringify(students));

//로컬 스토리지에서 가져온 후 추가하고 저장
let localData;
if(localStorage.getItem("students") === null) {
    localData = [];
}else {
    localData = JSON.parse(localStorage.getItem("students"));
    //스토리지의 값을 localData로 저장
}
localData.push("Choi");  //localData에 Choi를 추가
localStorage.setItem("students",JSON.stringify(localData));
//스토리지에 localData 저장
console.log(`추가 후 studnets : ${localData}`);

//로컬 스토리지에서 특정 값 삭제
const indexOfValue = localData.indexOf("Lee");  //인덱스 탐색
localData.splice(indexOfValue,1)  //인덱스에 해당하는 값부터 1개를 삭제
localStorage.setItem("students",JSON.stringify(localData));
console.log(`삭제 후 students : ${localData}`);



//로컬 스토리지에서 특정 키를 삭제
localStorage.removeItem("students");
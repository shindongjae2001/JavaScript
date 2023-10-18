//리스트를 클릭하면 해당 리스트 내용 삭제하기
//리스트의 모든 항목을 가져온다.
const items = document.querySelectorAll("li");

for(let item of items) {  //items의 있는 요소들을 item에 하나씩 넣기
    item.addEventListener("click", function() {
        //해당 항목을 클릭했을 때, 그 항목이 삭제 됨.
        //this.remove(this); //나 자신을 클릭하면 나 자신 삭제
        //화살표 함수가 아닌 익명 함수를 사용해야 한다 (정해진 것임), 화살표를 쓴다면 최상위를 가르키기 때문에 나 자신이라면 익명함수 !!
        //부모 노드에서 삭제
        this.parentNode.removeChild(this);
    });

}
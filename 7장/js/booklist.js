const title = document.querySelector("#title");  //'제목' 정보
const author = document.querySelector("#author"); //'저자' 정보
const save = document.querySelector("#save"); //'저장하기'버튼
const booklist = document.querySelector("#booklist");// 정보가 표시될 영역

//버튼을 클릭하면...
save.addEventListener("click", (e) => {
    e.preventDefault(); //버튼을 누르면 ㅅ더버로 보내지 않음
    //제목과 저자 정보를 출력.
    //리스트 요쇼 만들기
    const item = document.createElement("li");
    //item에 내용 넣기
    item.innerHTML = `${title.value} - ${author.value} 
    <span class=delBtn>삭제</span>`;

    //정보 영역에 추가
    booklist.appendChild(item);

    //input text 상자의 내용 바꾸기
    title.value = "";
    author.value = "";

    //목록에서 제거하기
    //삭제 버튼 요소를 모두 가져온다.
    const delBtns = document.querySelectorAll(".delBtn");

    //삭제버튼을 누를 때마다..삭제한다.
    for(delbtn of delBtns) {
        delbtn.addEventListener("click",function() {
        //    this.parentNode.remove();
    
        //삭제 버튼을 누를 때마다 ..삭제한다.
        this.parentNode.parentNode.removeChild(this.parentNode);
    
        });
    };
    
});
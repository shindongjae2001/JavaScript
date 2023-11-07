// 생성자 함수 만들기
//  function Cylinder(CylinderDimeter,CylinderHeight) {
//     this.diamter = CylinderDimeter;    //단순히 이름만 같다고 this를 쓰는게 아니라 객체를 이용하기 떄문에 this를 써야함
//     this.height = CylinderHeight;

//     //부피 계산 메서드
//     this.volume = function() {
//         //반지름
//         let radius = this.diamter/2;
//         //부피 계산 = 반지름 * 반지름 * 파이 * 높이
//         return (Math.PI * radius * radius * this.height).toFixed(2);
//     }
// }

//클래스 만들기
class Cylinder {
    constructor(CylinderDimeter,CylinderHeight) {
            this.diamter = CylinderDimeter;    //단순히 이름만 같다고 this를 쓰는게 아니라 객체를 이용하기 떄문에 this를 써야함
            this.height = CylinderHeight;
    }
            //부피 계산 메서드
            volume() {
                //반지름
                let radius = this.diamter/2;
                //부피 계산 = 반지름 * 반지름 * 파이 * 높이
                return (Math.PI * radius * radius * this.height).toFixed(2);
            }

        }
        
// 버튼 가져오기
const btn = document.querySelector("button");
//결과표시 영역 가져오기
const result = document.querySelector("#result");
//버튼을 누르면 입력한 지름과 높이를 가지고 생성자를 호출

btn.addEventListener("click" , function(event) {
    event.preventDefault();

    //지름 값 가져오기
    let diamter = document.querySelector("#cyl-diameter").value; 
    //높이 값 가져오기
    let height = document.querySelector("#cyl-height").value;
    
    //빈칸인지 아닌지 체크
    if(diamter==="" || height==="") {
        result.innerText=`지름, 높이 값을 모두 입력하세요`;
    }
    
    //객체 생성
    let re = new Cylinder(diamter,height);      //자바와 다르게 자바 스크립트는 클래스 이름을 적을 필요가 없음 (대신에 let이나 const해야함) 연산자가 곱하기므로 오류가 발생하지 않지만 플러스 연산자라면 문자열로 받기 때문에 오류가 발생하므로 parseInt해줘야함!
    //계산 결과 result에 표시
    result.innerText=re.volume();
});
 let num = document.querySelector("#user-number");
 let button = document.querySelector("button");
button.addEventListener("click" , () => {    //버튼 클릭하면 ?
    let number = num.value;

    try {                                     //try catch
        if(number === "" || isNaN(number)){    //만약 공백이거나 숫자가 아니라면
            throw "숫자를 입력하세요";           //throw로 해서 catch에 보냄
        }
        number=Number(number);                  
        if(number <= 10) {
            document.querySelector("#result").innerText=number;
        }
        if(number>10) {
            throw "10보다 작은 수를 입력하세요";
        }
    }catch(err) {
        alert(err);
    }
    finally {
        num.value = "";
    }

});


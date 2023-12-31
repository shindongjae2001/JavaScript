// 구조 분해 할당하기
const fruits = ["사과","복숭아"]
let apple = fruits[0]
let peach = fruits[1]

console.log("apple : ",apple)
console.log("peach : ",peach)

//구조 분해 할당 왼쪽에는 변수, 오른쪽에는 분해 할 값 지정.
let [apple1, peach1] = ["사과","복숭아"]

console.log("apple1 : ",apple1)
console.log("peach1 : ",peach1)

//일부 값만 변수에 할당
let [spring, fall, ] = ['봄','여름','가을','겨울']
console.log("spring : ",spring)
console.log("peach1 : ",fall)

//나머지 변수를 사용해 구조 분해 할당 하기
//나머지 값을 묶어서 만든 변수를 나머지 변수라고 한다.
//변수 앞에 ...붙인다.
let [teacher, ...student] = ['신동재','홍길동','김길동','박길동']
console.log("teacher : ", teacher)
console.log("student : ",student)

//두 수의 값 교환
let x = 10
let y = 20
console.log("처음 x : ",x)
console.log("처음 y : ",y)



//원랜 임의 변수(temp)값으로 만들어서 교환함
// let temp= x;
// x = y;
// y = temp;
// [x, y] = [y, x]


// console.log("교환 x : ",x)
// console.log("교환 y : ",y)

//객체 구조 분해 할 때는 프로퍼티 이름이나 메서드 이름을 변수 이름으로 사용.
//객체는 순서가 없기 떄문에 이름과 변수 이름이 같아야한다.
const member = {
    name1 : `김지연`,
    age1 : 25
}
let {name1, age1} = member

console.log("name1 : ",name1)
console.log("age1 : ",age1)

//객체 프로퍼티에 접근하지 않고 변수를 사용하여 프로그래밍 가능
let name2, age2 = {name2:",이순신",age2:30}
console.log("name2 :",name2)
console.log("age2 : ",age2)

//새로운 변수 이름 사용하기
//name키의 값을 새로운 변수 uesrName에 할당하려면..
//name 프러퍼티 값을 userName 변수에 할당하여야 한다.
const member2 = {
    name : '홍길동',
    age : 22
}
let {name:userName,age} = member2
console.log("userName : ",userName)

//중첩된 객체 구조 분해
//중첩된 객체는 객체 안에 객체가 있는것
const student1 = {
    name : '신동재',
    score : {
        history : 85,
        math : 94,
        eng : 100
    },
    friends : ['신동재','밥동재','함동재']
}

//studnet1에 있는 값을 구조 분해하여 변수에 할당 할 수 있다.
let {
    name,
    score : {history,math,eng},  //sudent1.score.eng의 값
    friends:[f1,f2,f3]
} = student1

console.log("영어 점수 : ",eng)
console.log("2번째 친구 : ",f2)
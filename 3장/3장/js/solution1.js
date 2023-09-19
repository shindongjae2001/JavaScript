const num = [1,3,4,6,7,11,12,23,24];

//반복문 for로 배열에서 10보다 큰 값 출력하기
for(let i = 0; i < num.length; i++) {
    if(num[i]>10) {
    document.write(`${num[i]}, `);
    } 
}
document.write("<hr>")




//반복문 forEach로 배열에서 10보다 큰 값 출력하기
num.forEach(function(nums){
    if(nums>10) {
        document.write(`${nums}, `);
    } 
});
document.write("<hr>")



//반복문 for..of로 배열에서 큰 값 출력하기
for(let nums1 of num) {
    if(nums1>10) {
    document.write(`${nums1}, `);
    }
}
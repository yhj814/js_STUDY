// == : 값만 비교

let data1 = 1;
let data2 = "1";

//값만 비교 true
console.log(data1 == data2);

//type 까지 비교 false
console.log(data1 === data2);

// || : 앞에 있는 값이 false 값이라면, 뒤에 있는 값으로 사용된다.
// (조건식에 넣었을떄) false로 취급되는 값 : "", null, 0, undefined

//값이 안들어가 있기 때문에 뒤에 10이 들어간다
let value;
let data = value || 10;

console.log(data); //결과 10

// && : 앞의 조건식이 false 라면 false이고
// 앞의 조건식이 true라면 뒤에 적은 값으로 대체한다
let check = false;
console.log(check && 10); // 결과 false

let check_1 = true;
console.log(check_1 && 10); //결과 10

// 삼항 연산자(? :)
let condition = 10 > 11;
let result = condition ? 10 : 11;
console.log(result); //결과 11

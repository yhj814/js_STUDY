// Array 객체
// let datas = [10, 4, 20, 3, 2];

// push(): 가장 마지막값 추가
// datas.push(3);
// console.log(datas);

// join() :전달한 값으로 구분한뒤 문자열로 연결되어 리턴
// console.log(datas.join(","));

// slice(begin, end) : 원하는 부분을 추출하기 위해
// 시작 인덱스와 마지막 인덱스를 전달한다 마지막 전 인덱스값이 출력된다
// console.log(datas.slice(1, 3));

//slice(begin) :시작 인덱스부터 마지막까지 추출한다
// 1번째 인덱스부터 끝까지 출력
// console.log(datas.slice(1));

// splice(index, count): 삭제
// 첫번째 인덱스부터 두번째 인덱스 까지만 냅두고 삭제
// console.log(datas.splice(1, 2));
// // 삭제후 나머지 데이터 출력됨
// console.log(datas);

// splice(index, count, ...args): 교체
// console.log(datas.splice(1, 1, 200));
// console.log(datas);

// pop(): 마지막 요소 삭제
// const dataRemoved = datas.pop();
// console.log(`${dataRemoved} 삭제`);
// console.log(datas);

// shift(): 첫 번째 요소 삭제
// const dataRemoved = datas.shift();
// console.log(`${dataRemoved} 삭제`);
// console.log(datas);

// indexOf(value): value를 해당 Array객체에서 찾은 뒤 인덱스 번호 리턴.
// 못찾으면 -1 리턴됨
// 찾았으면 0 리턴됨
// const i = datas.indexOf(100);
// console.log(i);

// let datas = [10, 4, 20, 3, 2];
// // ...으로 안에 값을 한번에 가져올수 있음
// const numbers = [...datas];
// console.log(numbers);

// 값 가져오기
// const [number1, number2] = datas;
// console.log(number1, number2);

// 배열 5칸 만들고 안의 값을 0으로 채우기
// let datas = new Array(5).fill(0);
// console.log(datas);

// fill(value): Array 객체의 모든 칸에 value로 초기화
// let datas = new Array(5).fill(0);
//값, 인덱스, 객체;
//forEach((value, index, array) => {});

// datas.forEach((data, i, datas) => {
//     console.log(data, i, datas);
// });

//Array 객체에 1부터 5까지 출력
// let datas = new Array(5).fill(0);
// datas.forEach((data, i, datas) => {
//     datas[i] = i + 1;
// });

// console.log(datas);

// Array에 인덱스 값 만출력
// let datas = new Array(5).fill(0);
// for (let i in datas) {
//     console.log(i);
// }

// Array에 넣은 값을 출력
// let datas = new Array(5).fill(0);
// for (let data of datas) {
//     console.log(data);
// }

// 2 ~ 10까지 2의 배수로 Array객체에 담아 출력
// 2 4 6 8 10: 5칸
// .fill(숫자) 를 쓰지 않으면 빈값(empty items)으로 출력됨
// const datas = new Array(5).fill(0);
// datas.forEach((data, i, datas) => {
//     datas[i] = (i + 1) * 2;
// });
// console.log(datas);

// 1번방법 : 1 ~ 10까지 Array에 담은 후 각 값에 제곱을 출력한다.
// const datas = new Array(10).fill(1);
// datas.forEach((data, index, datas) => {
//     datas[index] = data * (index + 1) * (index + 1);
// });

// console.log(datas);

// 2번방법 : 1 ~ 10까지 Array에 담은 후 각 값에 제곱을 출력한다.
// const square = [];
// for (let i = 1; i <= 10; i++) {
//     square.push(i * i);
// }
// console.log(square);

// // 1 ~ 10까지 각 값에 제곱을 출력한다.
// const datas = new Array(10).fill(0);
// datas.forEach((data, i, datas) => {
//     datas[i] = i + 1;
// });

// datas.forEach((data) => {
//     console.log(data * data);
// });

// **************************************************************************

//map((value,index,array)=>{})
// 기존 값을 전달한 callback 함수의 리턴값으로 변경

// map
// const datas = new Array(10, 6, 8, 4, 2);
// //기존값에 2배를 한다               중괄호 없으면 리턴값
// const updatedDatas = datas.map((data) => data * 2);
// console.log(updatedDatas);

// filter((value, index, array) => {})
// filter : 걸러낸다
// const datas = new Array(10, 6, 8, 4, 2);
// const updatedDatas = datas.filter((data) => data % 4 == 0);
// console.log(updatedDatas);

// 문자열
// split() :구분점을 전달해 값을 나눠준다
//          Array 객체로 리턴하기 떄문에, 문자열을 Array 객체로 바꿀 때도 사용한다
// 3개의 array 객체로 'A','B','C' 가 출력된다
// console.log("ABC".split(""));

// includes(value): value가 문자열에 포함되었는지 검사
// console.log("ABCD".includes("Z")); //true or false 로 출력됨

// CharAt(index) 해당 인덱스의 문자열을 출력 (첫번째 문자인 A가 출력)
// console.log("ABC".charAt(0));

// 형변환 (정수만 가져와 14만 출력)
// console.log(parseInt("14px")); //정수만 추출
// console.log(Number("14px") + 1); //정수외에 다른 문자열이 있으면 오류

// 10~1까지 Array 객체에 담은 후 짝수만 출력
const datas = new Array(10, 9, 8, 7, 6, 5, 4, 3, 2, 1);
const updatedDatas = datas.filter((data) => data % 2 == 0);
console.log(updatedDatas);

// 1~100까지 Array 객체에 담은 후 3의 배수만 추출 후 출력
const datas_1 = new Array(100).fill(0);
datas_1.forEach((data, i, datas_1) => {
    return (datas_1[i] = i + 1);
});
const updatedDatas_1 = datas_1.filter((data) => data % 3 == 0);
console.log(updatedDatas_1);

// 한글을 숫자로(삼사칠구 -> 3479)
const changeNumber = (...input) => {
    const hangul = [..."공일이삼사오육칠팔구"];
    return parseInt(input.map((c) => hangul.indexOf(c)).join(""));
};

// ...문자열 또는 ...Array객체: unpacking 문법,
// 모든 값을 각각 분리할 때 사용한다.
// const test = "ABC";
// console.log(...test);

const number = changeNumber(..."삼사칠구");
//정수로 바꿨기때문에 연산도 가능
console.log(number + 10);

// 숫자를 한글로(3479 -> 삼사칠구)
// const hangul = [..."공일이삼사오육칠팔구"];
// const input = "3479";
// const target = [...input];

// const result = target.map((number) => hangul[number]).join("");
// console.log(result);

// ★ special
// new Array(10).fill(0).forEach(() => {datas[i] = i + 1}) : 리턴 없음, 반복문, 기존 객체
// new Array(10).fill(0).map(() => i + 1): 리턴 있음, 반복문 + 수정(리턴값), 새로운 객체

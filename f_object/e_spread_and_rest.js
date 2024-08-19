// const user = {
//     id: 1,
//     name: "han",
// };

// 구조 분해(비구조화 할당)
// const { id, name } = user;
// console.log(id, name);

// 초기값 설정
//age 라는 값을 추가 할수도 있다
// const { id, name, age = 10 } = user;
// console.log(id, name, age);

// 프로퍼티 매핑 후 원하는 이름으로 변경
// id 이름을 number로 변경
// const { id: number, name, age = 10 } = user;
// console.log(number, name, age);

// product
// property: id, name, price
// 상품 객체 1개 만든 후
// 구조 분해를 사용해서 3개의 정보를 출력한다.
// 이 때, price대신 value를 사용한다.
// const product = {
//     id: 1,
//     name: "사과",
//     price: 1000,
// };
// // price대신 value를 사용
// const { id, name, price: value } = product;
// console.log(id, name, value);

//객체 스프레드 :  값 복사
// const product = {
//     id: 1,
//     name: "사과",
//     price: 1000,
// };
// //값복사 : 깊은복사 ...으로 안에 있는 모든값을 객체{}로 출력할 수 있다
// const otherProduct = { ...product };
// console.log(otherProduct);

// 객체 스프레드: 값 복사
// const product = {
//     id: 1,
//     name: "상품A",
//     price: 3600,
// };
// // immutable, 즉, 기존 객체의 주소가 아닌 원래 값만 복사해 온다.
// const otherProduct = { ...product };
// // 수정불가
// otherProduct.name = "한동석";
// console.log(product);
// 기존에 없던 key를 작성하면 추가된다.
// const product = {
//     id: 1,
//     name: "상품A",
//     price: 3600,
// };
// // 기존에 없던 stock이라는 키 값 추가 (안에 추가를 해야한다)
// const anotherProduct = { ...product, stock: 32 };
// console.log(anotherProduct);

// 이미 있는 key를 작성하면 수정된다.
// const product = {
//     id: 1,
//     name: "상품A",
//     price: 3600,
// };
// // 원래 있던 price key값 수정
// const anotherProduct = { ...product, price: 1000 };
// console.log(anotherProduct);

// 유치원에 어린이 3명이 있다.
// 어린이 3명의 정보는 다음과 같다.
// 이름, 나이
// 3명의 어린이를 유치원 객체에 담는다.
// 기존의 어린이 1명의 정보를 복사해서 유치원에 새로운 어린이로 추가한다

// 생성자 초기화 //초기화할때 function 쓰기
// function Child(name, age) {
//     this.name = name;
//     this.age = age;
// }
// // 3명의 아이 정보 입력
// const child1 = new Child("또치", 4);
// const child2 = new Child("둘리", 5);
// const child3 = new Child("도너", 3);

// // 새로운 생성자
// const kindergarten = new Object();

// //생성자에 담아주기
// kindergarten.child1 = child1;
// kindergarten.child2 = child2;
// kindergarten.child3 = child3;

// //기존의 아이명의 정보 복사해서 새롭게 추가후 1살더 추가
// const child4 = { ...child3, age: child3.age + 1 };

// //새로운 아이 다시 넣어주기
// kindergarten.child4 = child4;

// console.log(kindergarten);

// rest: 나머지
const user = {
    id: 1,
    name: "han",
    age: 4,
};

const userUpdated = { ...user, age: 20 };

// // age만 가져오고 나머지 프로퍼티는 rest에 담긴다.
const { age, ...rest } = userUpdated;
// 나이만 출력
console.log(age);
// 나이를 재외한 나머지 정보출력
console.log(rest);

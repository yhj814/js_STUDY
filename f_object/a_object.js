// 함수와 메소드
// 함수는 어떤 영역에도 갇혀있지 않은 상태로 선언된 형태
// 메소드는 어떤 영역내에 갇혀 있는 상테로 선언된 형태

// JS에서는 객체 내부의 필드를 프로퍼티라고 부른다.
// let user = {
//     // 값
//     name: "한동석",
//     age: 20,
//     address: "경기도",
//     // 메소드
//     introduce: () => {
//         console.log("Hi😍");
//     },
// };
// //프로퍼티 = object 타입
// console.log(typeof user);
// console.log(user.name);

// // 메소드 사용은 소괄호
// user.introduce();

// //접근은 . 로접근하지만 - 와같은 특수문자가 있으면 []로 감싸서 쓴다
// const p = {
//     "data-x": "text-container",
// };

// console.log(p["data-x"]);

// 만약 프로퍼티 key값에 규칙성이 있다면,
// const user = {
//     name: "한동석",
//     address1: "경기도 남양주시",
//     address2: "화도읍",
//     address3: "구암리",
// };

// // 이 또한 대괄호를 사용하여 순서대로 가져올 수 있다.
// for (let i = 0; i < 3; i++) {
//     // 백틱 ` ` 사용
//     console.log(user[`address${i + 1}`]);
// }

// 상품 정보를 JS 객체로 구성한다.
// 상품 번호, 상품명, 가격, 재고-1, 재고-2
// 각 정보를 출력하되, 재고1과 재고2는 반복문을 사용해서 출력한다.
// 재고-1이 실재고이고, 재고-2는 기타재고이다.
// 상품 정보에 재고-1을 사용해서 총 가격을 리턴하는 메소드를 선언 한다.

// const product = {
//     id: 1,
//     name: "사과",
//     price: 1000,
//     "product-1": 10,
//     "product-2": "기타재고",
//     allPrice: () => {
//         //특수문자로된 값을 가져올때는 . 이아닌 []에 가져온다
//         //this. 은 사용할수 없다
//         console.log(product.price * product["product-1"]);
//     },
// };

// for (let i = 0; i < 2; i++) {
//     // 규칙성이 있는 product- 로 값 가져오기
//     console.log(product[`product-${i + 1}`]);
// }

// //메소드 사용
// product.allPrice();

// //with 로 내부 값들을 가져올 수 있다
// with (product) {
//     console.log(id, name, price); //
// }

// // 강사님
// const product = {
//     id: 1,
//     name: "보리차",
//     price: 1300,
//     "stock-1": 32,
//     "stock-2": -2,
//     getTotal: () => {
//         return product.price * product["stock-1"];
//     },
// };

// with (product) {
//     console.log(id, name, price);
//     // 특수문자로 된 키 값 따로 가져오기
//     for (let i = 0; i < 2; i++) {
//         console.log(product[`stock-${i + 1}`]);
//     }
// }

const shop = {};
// key가 존재하지 않다면 추가
shop.id = "4325";
console.log(shop);

// // key를 다시 재정의 하면 수정
shop.id = "1";
console.log(shop);

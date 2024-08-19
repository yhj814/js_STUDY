// 생성자
// 해당 필드를 메모리에 할당하고 그 주소값을 가지고 온다
// 초기화도 가능하다

// 생성자는 앞자리 대문자
// 함수는 앞자리 소문자

// 생성자는 단 한번만 선언하려고 사용

// 생성자를 초기화 할때 function을 사용해 초기화 한다
// function User(id, pw, name, age) {
//     // this: 생성된 객체
//     this.id = id;
//     this.pw = pw;
//     this.name = name;
//     this.age = age;
// }

// 타입별로 prototype 객체가 자동으로 생성된다.
// prototype에 추가한 프로퍼티는 해당하는 타입의 객체들이 모두 사용할 수 있다.
// 하지만 객체별로 가지고 있지 않고 공용으로 1개 만들어진 것을 공유하는 것이다.

// 생성자.prototype.사용할객체이름(메소드같은역할)
// User.prototype.extinct = "인간";

// const user1 = new User(1, "1234", "한동석", 20);
// const user2 = new User(1, "2222", "홍길동", 55);

// console.log(user1.extinct);
// console.log(user2.extinct);

// User.prototype.extinct = "엘프";

// console.log(user1.extinct);
// console.log(user2.extinct);

// 상품 생성자 제작 후 객체 2개 만들기
// 생성자를 통해 초기화한다.
// 프로퍼티: 번호, 상품명, 가격, 수량
// 공용: 각 상품객체는 총 가격을 구할 수 있어야 한다.

function Product(id, name, price, count) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.count = count;
}
// 생성자명.prototype.사용할객체
Product.prototype.total = (product) => {
    return product.price * product.count;
};
// 객체 생성
const product1 = new Product(1, "사과", 2000, 10);
const product2 = new Product(2, "배", 4000, 15);

// total 객체 만들어 사용
let total1 = Product.prototype.total(product1);
let total2 = Product.prototype.total(product2);

console.log(total1, total2);

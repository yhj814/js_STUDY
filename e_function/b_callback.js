//arrow expression
//함수 선언시, 이름이 없는 익명 함수 선언 방법

// const printName = (name) => {
//     console.log(name);
// };

// printName("용호중");

// // 첫 번째, 두 번째 매개변수는 값이지만, 세 번째에 작성된 callback에는 함수가 들어온다.
// const add = (number1, number2, callback) => {
//     // 만약 callback에 아무것도 전달되지 않았다면, undefined이다.
//     // 이는 조건식 자리에 작성할 경우 false를 의미한다.
//     if (callback) {
//         // 만약 callback 함수가 전달되었다면,
//         // 전달받은 callback 함수를 사용한다.
//         // 단, 전달한 함수의 매개변수 구조를 알아야 사용할 수 있다.
//         callback(number1 + number2);
//     }
//     // 만약 callback에 함수를 전달받지 않았다면, 두 정수의 결과를 리턴한다.
//     return number1 + number2;
// };

// // 출력하지 않고 6 리턴
// let total = add(1, 5);

// // 출력하고 6 리턴
// total = add(1, 5, (result) => {
//     console.log(result);
// });

//1. 두 정수의 곱셈을 구한뒤
const sub = (num1, num2, callback) => {
    let result = num1 * num2;
    if (callback) {
        callback(result);
    }
    return result; //return을 안해줘도  total 값은 나오지만 다시 한번 쓰기 위해서는 return을 해줘야 한다
};

total = sub(1, 5, (result1) => {
    //익명함수 이기 때문에 위에것을 받아오는 함수라 이름이 달라도 상관없다
    //2. 결과에 2를 곱해서 출력
    console.log(result1 * 2);
});

//3.성씨와 이름을 전달 받아서 전체이름을 만든 뒤 "000님" 출력
// const fullname = (firstname, lastname, callback) => {
//     let result = firstname + lastname;
//     if (callback) {
//         callback(result);
//     }
//     return result;
// };

// const fullnamePrint = (result) => {
//     console.log(result + "님");
// };

// fullname("용", "호중", fullnamePrint);

//4.상품 1개 가격과 총 합을 입력받고 개수를 알아낸 뒤
// const goods = (oneprice, allprice, callback) => {
//     let goodsNumber = allprice / oneprice;
//     if (callback) {
//         callback(goodsNumber);
//     }
//     return goodsNumber;
// };
// //개수가 5개 이하라면 true 아니면 false 리턴
// //inspect : 개수 검사(내가 만든 변수이름)
// const inspect = (result) => {
//     console.log(result < 5 ? true : false);
// };

// goods(250, 500, inspect);

//4.강사님코드
// const getCount = (price, total, callback) => {
//     let count = price / total;

//     if (callback) {
//         return callback(count);
//     }
//     return count;
// };

// const checkLessEqaulThan5 = (count) => {
//     return count <= 5;
// };

// let check = getCount(140000, 70000, checkLessEqaulThan5);
// console.log(check);

// let count = getCount(140000, 70000);
// console.log(count);

//5.결제 상품 가격과 결제 상태를 전달 받아서
//결제 상태가 true일 떄 결제 완료, false 일 경우 결제 취소 출력
// const product = (price, payment, callback) => {
//     if (callback) {
//         callback(payment);
//     }
//     return payment;
// };
// const productStatus = (result) => {
//     console.log(result == true ? "결제 완료" : "결제 취소");
// };

// product(100, false, productStatus);

// 5. 강사님코드
// const setStatus = (price, status, callback) => {
//     if (callback) {
//         callback(status ? price + "원 결제 완료" : price + "원 결제 취소");
//     }
// };

// setStatus(3000, true, console.log);

//문제 3개 만들어서 팀원에게 공유
// 1. 이름과 나이를 입력받아 나이가 20살이상일경우 "성인" 20살 미만일경우 "미성년자" 출력
// const person = (name, age, callback) => {
//     if (callback) {
//         callback(age > 20 ? "성인" : "미성년자");
//     }
//     return age;
// };

// person("용호중", 25, console.log);

// 2. 몸무게와 키를 입력받아 키에서 몸무게를 뺸값에 2를 곱해 총합이 190이상일 경우 "정상" 아닐경우 "비정상은 아닙니다" 출력
// const person = (weight, height, callback) => {
//     let total = height - weight;
//     if (callback) {
//         callback(total * 2 >= 190 ? "정상" : "비정상은 아닙니다");
//     }
// };

// person(72, 175, console.log);

// 3. 상품이름, 상품개수, 상품한개당가격 을 입력받아 산 상품의 총가격이 10000원을 넘었을 경우 "못삼" 안넘었을경우 "살수 있음"을 출력
// 첫번째 방법
// const product = (productName, productNumber, productPrice, callback) => {
//     let total = productNumber * productPrice;
//     if (callback) {
//         callback(total);
//     }
//     return total;
// };

// const printProduct = (result) => {
//     console.log(result > 10000 ? "못삼" : "살수 있음");
// };

// product("햇반", 11, 1000, printProduct);

// 두번째 방법
// const product = (productName, productNumber, productPrice, callback) => {
//     let total = productNumber * productPrice;
//     if (callback) {
//         callback(total > 10000 ? "못삼" : "살수 있음");
//     }
// };

// product("햇반", 9, 1000, console.log); //console.log도 함수기 때문에 callback자리에 사용가능

// 문자열과 문자를 입력받아 해당 문자가 문자열에 포함되어있는지
// 확인하고 이 결과를 출력하는 함수를 작성하세요
// const checkToInclude = (word, character, callback) => {
//     let check = word.includes(character);
//     if (callback) {
//         callback(check);
//     }
//     return check;
// };

// checkToInclude("ABC", "Z", console.log);

// 농장에서 축사 대청소를 하려고 한다.
// 소와 돼지의 총합 수와 각각 비교해 가축 중 수가 적은 쪽을 출력
const compareCowWithPig = (cowCount, pigCount, callback) => {
    let result = cowCount > pigCount;
    if (callback) {
        callback(result);
    }
    return result;
};

const printLessThan = (result) => {
    console.log(!result ? "소" : "돼지");
};

compareCowWithPig(250, 220, printLessThan);

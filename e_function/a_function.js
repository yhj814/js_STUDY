//함수는 무조건 값으로 본다
//function 식별자 (매개변수, ...)
// 실행할문장;
// return 리턴값;
// }

// function add(num1, num2) {
//     return num1 + num2;
// }

// const plus = add;
// console.log(plus(1, 3));

//디폴트 파라미터
// function add(num1, num2, num3) {
//     return num1 + num2 + num3;
// }

// let result = add(1, 2);
// console.log(result);     //값을 3개 전달했지만 2개만 2개만 전달 받았기 때문에 NAN (NOT a number)가 뜬다

//해결방법
// function add(num1, num2, num3 = 0) {     //0을 준다
//     return num1 + num2 + num3;
// }

// let result = add(1, 2);
// console.log(result);

// 아이디, 비밀번호, 닉네임을 전달받는다.
// 이 때 닉네임의 기본 값은 '없음'으로 설정한다.   기본값을 줬기때문에 디폴트 파라미터가 안뜬다
//js는 '', ""  모두 문자열이다
// function user(id, password, nickName = "없음") {
//     let result = "";
//     result += "아이디 " + id;
//     result += "\n비밀번호 " + password;
//     result += "\n닉네임 " + nickName;

//     return result;
// }

// let result_1 = user("yhh725", "1234");
// console.log(result_1);

//가변 인자
// function add(...numbers) {  // 무슨 값을 받을지 모를때는 ...을 붙인 가변인자를 쓴다
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i];
//     }
//     return total;
// }

// let result = add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(result);

// 고객의 정보를 받아서 출력하는 함수
// 고객의 정보는 몇 개일지 알 수 없다.
// 단, 반드시 이름은 받아야 한다

function setInfo(name, ...information) {
    console.log(name);
    for (let i = 0; i < information.length; i++) {
        console.log(information[i]);
    }
}

setInfo("한동석", 20, "코리아IT아카데미 강남점", "01012341234", "톰", "잭");

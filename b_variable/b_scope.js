// let 영역 안에서만 쓸 수 있다
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// var 영역 밖에서 쓸 수 있다
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);

// let: 모든영역
// var: 함수영역 function f(){} 여기서 {} 안에 있는 영역만 영역으로 친다
//let을 써야 헷갈리지 않는다 var는 그 함수의 영역을 찾아야하므로 헷갈릴 수 도 있다

//let키워드와 var키워드는 둘다 변수를 선언하는 키워드이다
//하지만, 영역({})의 취급이 다르다
// let 키워드는 모든 영역(if문 중괄호, for문 중괄호, 함수 중괄호 등)을 영역으로 간주한다.
// var 키워드는 함수 영역만 영역으로 간주한다
// (if문, for문 등과 같은 영역은 영역으로 간주하지 않는다).

let x = 10;
function f() {
    let x = 20;
    //전역변수가 있어도 가까운값을 먼저 찾기때문에 20이 출력된다
    console.log(x);
}

//Node.js에서 전역변수를 선언할거면 global 로 선언
// global.x = 10;

//밖에 선언하더라도 출력문에 가까운 global이 출력된다
//브라우저(html)에서 전역변수 선언할때는 window를 써야한다

//브라우저(html)와 Node.js에서 동시에 쓰려면 globalThis를 쓰면 된다
globalThis.x = 10;

function f() {
    let x = 20;
    // var x = 30;
    // global.x = 30;
    globalThis.x = 30;
    console.log(x);
}

f();

// console.log(global.x);
console.log(x);
//결론 : 전역변수 만들고 싶으면 globalThis 사용

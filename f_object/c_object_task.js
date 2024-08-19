// 마트에 등록되지 않은 고객이 3명이다.
// 고객별 정보는 다음과 같다.

// 1)
// 이름: 홍길동
// 나이: 30
// 포인트: 3500

// 2)
// 이름: 이순신
// 나이: 22
// 포인트: 0

// 3)
// 이름: 장보고
// 나이: 66
// 포인트: 9500

// 3명을 모두 마트에 등록 시킨다.
// 마트 객체를 만들고 각 고객을 프로퍼티로 선언한다.
const market = new Object();
const user1 = { name: "홍길동", age: 30, point: 3500 };
const user2 = { name: "이순신", age: 22, point: 0 };
const user3 = { name: "장보고", age: 66, point: 9500 };

// market에 들어간 값 ,  넣은 값
market.user1 = user1;
market.user2 = user2;
market.user3 = user3;

for (let i = 0; i < 3; i++) {
    //공통된 user 된 값 가져오기
    console.log(market[`user${i + 1}`]);
}

//JSON 형식으로 값을 가져오는 것으로 ""로 묶여서 가져와진다
const data = JSON.stringify(market);
console.log(data);

// JSON 형식으로 가져온 값을 다시 JS형식으로 가져온다
const marketData = JSON.parse(data);
console.log(marketData);

// 콜백으로 계속 연결해야하기 때문에 굉장히 불편하다.
// const userService = (() => {
//     const getUserList = (callback) => {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then((response) => response.json())
//             .then(callback);
//     };

//     return { getUserList: getUserList };
// })();

// const printUsers = (users) => {
//     console.log(users);
// };

// userService.getUserList(printUsers);

// async, await 문법으로 해결할 수 있다.
// async function getName() {
//     return "hds";
// }

// async function printName() {
//     let result = await getName();
//     console.log(result);
// }

// printName();

// 모듈화 하기
const userService = (() => {
    // async 를 붙여 비동기화 상태로 만든후 callback 으로 넘겨준다
    const getUserList = async (callback) => {
        // await를 쓰면 한번 벗겨진다(json 으로 바뀜)
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        // 한번 더 벗겨져 객체로 사용가능해짐
        const users = await response.json();
        callback(users);
    };

    return { getUserList: getUserList };
})();

const printUsers = (users) => {
    console.log(users);
};

userService.getUserList(printUsers);

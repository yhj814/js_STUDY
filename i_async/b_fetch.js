//then 한번 써서 json 형식으로 만들어주고
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    // then을 한번 더 써서 객체로 만들어서 사용할수 있게 해준다
    .then((users) => {
        console.log(users);
    });

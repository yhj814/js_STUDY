//const lunch = {}; 와 같다
const lunch = new Object();

lunch.name = "김밥";
lunch.price = 3000;

console.log(lunch);

lunch.pay = () => {
    console.log("결제 완료");
};

lunch.pay();

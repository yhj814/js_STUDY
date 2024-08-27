// <select> 요소 추가
const select = document.createElement("select");
select.name = "time";
select.className = "select-input";

// 기본 선택 옵션 추가
const defaultOption = document.createElement("option");
defaultOption.value = "";
// 기본 옵션 선택 불가
defaultOption.disabled = true;
// 기본적으로 선택되게 함
defaultOption.selected = true;
defaultOption.textContent = "매칭 시간 선택";
select.appendChild(defaultOption);

// 오전 시간 추가
for (let i = 1; i <= 12; i++) {
    const option = document.createElement("option");
    option.value = "오전";
    option.textContent = `오전 ${i}시`;
    select.appendChild(option);
}

// 오후 시간 추가
for (let i = 1; i <= 12; i++) {
    const option = document.createElement("option");
    option.value = "오후";
    option.textContent = `오후 ${i}시`;
    select.appendChild(option);
}
// <div class="label-container time"> 요소 아래에 <select> 추가
const container = document.querySelector(".label-container.time");
container.appendChild(select);

// 조회하기 div가져오기
const searchAll = document.querySelector(".search-all");

// 조회하기 눌렀을때 알림 + form 제출로 조회결과 제출
searchAll.addEventListener("click", () => {
    alert("조회가 완료되었습니다!");
    document.getElementById("searchForm").submit();
});

//팀명검색 돋보기 이미지 가져오기
const button = document.querySelector("button");

// 돋보기 눌렀을때 팀명 조회결과 나옴
button.addEventListener("click", () => {
    alert("팀명 검색이 완료되었습니다!");
    document.getElementById("teamForm").submit();
});

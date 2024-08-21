const toDoLayout = (() => {
    const showToDos = (todos) => {
        const table = document.querySelector("table.todos");
        let text = ``;

        todos.forEach((todo) => {
            // todo.completed가 true 면 on class를 아니면 그냥 title 출력
            text += `<tr>
                        <td><span>${todo.userId}</span></td>
                        <td>
                            <span ${todo.completed && "class='on'"}>${
                todo.title
            }</span>
                        </td>
                        <td>${todo.completed}</td>
                    </tr>`;
        });

        table.innerHTML = text;
    };

    return { showToDos: showToDos };
})();

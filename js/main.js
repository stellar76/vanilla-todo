const todosWrapper = document.getElementById('todos-wrapper');

let newTodos = [];
let finishedTodos = [];

getCurrentTime = () => {
    const rightNow = new Date();
    let hours = rightNow.getHours();
    let minutes = rightNow.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

getCurrentDate = () => {
    const today = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', "May", 'June', 'July', 'August', 'September', 'October', 'November', 'Decemeber'];
    const currentDay = () => {
        const d = today.getDay();
        if (d === 0) { return days[0] }
        if (d === 1) { return days[1] }
        if (d === 2) { return days[2] }
        if (d === 3) { return days[3] }
        if (d === 4) { return days[4] }
        if (d === 5) { return days[5] }
        if (d === 6) { return days[6] }
    };
    const currentMonth = () => {
        const m = today.getMonth();
        if (m === 0) { return months[0] }
        if (m === 1) { return months[1] }
        if (m === 2) { return months[2] }
        if (m === 3) { return months[3] }
        if (m === 4) { return months[4] }
        if (m === 5) { return months[5] }
        if (m === 6) { return months[6] }
        if (m === 7) { return months[7] }
        if (m === 8) { return months[8] }
        if (m === 9) { return months[9] }
        if (m === 10) { return months[10] }
        if (m === 11) { return months[11] }
    }
    const currentDate = () => {
        return today.getDate();
    }
    const currentYear = () => {
        return today.getFullYear();
    }
    return currentDay() + ' - ' + currentMonth() + ' ' + currentDate() + ', ' + currentYear() + ' @ ' + getCurrentTime();
}

renderNewTodos = () => {
    newTodosWrapper = document.getElementById('todos-wrapper');
    newTodosWrapper.innerHTML = '';
    newTodos.forEach((t, index) => {
        newTodosWrapper.innerHTML += '<li class="list-group-item"><h5 class="mb-1">' + t.title + '</h5><small>' + t.start_date + '</small><span class="btn btn-danger btn-sm btn-remove ion-close-round" data-id="' + index + '" onclick="removeTodo(event)"></span><span class="btn btn-success btn-sm btn-finish ion-checkmark-round" data-id="' + index + '" onclick="finishTodo(event)"></span></li>'
    });
    const todoTitle = document.getElementById('todo-title').value = '';
}

renderFinishedTodos = () => {
    finishedTodosWrapper = document.getElementById('finshed-todos-wrapper');
    finishedTodos.forEach((ft) => {
        finishedTodosWrapper.innerHTML += '<li class="list-group-item"><h5 class="mb-1">' + ft.title + '</h5> <small>Created:' + ft.start_date + '</small><br><small>Finished:' + ft.finish_date + '</small></li>';
    });
}

const submitTodo = document.getElementById('submit-todo');

submitTodo.addEventListener('click', () => {
    const todoTitle = document.getElementById('todo-title').value;
    if (todoTitle === '') { alert('Please enter a a todo title!') }
    else if (todoTitle === undefined) { alert('Please enter a a todo title!') }
    else if (todoTitle === null) { alert('Please enter a a todo title!') }
    else {
        newTodos.push({
            title: todoTitle,
            start_date: getCurrentDate(),
            finish_date: ''
        });
        renderNewTodos();
    }
});

removeTodo = (event) => {
    newTodos.splice(event.target.getAttribute('data-id'), 1);
    renderNewTodos();
}

finishTodo = (event) => {
    console.log(event.target.getAttribute('data-id'));
    const currentTodo = event.target.getAttribute('data-id');
    newTodos[currentTodo].finish_date = getCurrentDate();
    finishedTodos.push(newTodos[currentTodo]);
    console.log(finishedTodos);
    renderFinishedTodos();
}


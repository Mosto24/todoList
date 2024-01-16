let tasks = [];

Object.entries(JSON.parse(localStorage.getItem('todo_listNew'))).map((item) => {
    tasks.push([item[0], item[1]]);
    return '';
});

const TodoList = () => {
    let list = tasks.map((item) => {
        return (<div class="card">
        <div class="card-body">
          <h5 class="card-title">{item[0]}</h5>
          <p class="card-text">{item[1]}</p>
        </div>
      </div>);
    });
    console.log(list);
    return (
        <div>{list}</div>
    );
}

export default TodoList;

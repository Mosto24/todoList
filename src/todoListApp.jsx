import { useState } from "react";

const TodoList = () => {
    let [tasks, setTasks] = useState(Object.entries(JSON.parse(localStorage.getItem('todo_listNew'))));

const deleteTask = (name) => {
    let newTasks = tasks.filter((item) => {
        if(item[0] !== name) {
            return true;
        }
        return false;
    });
    let newObj = JSON.parse(localStorage.getItem('todo_listNew'));
    delete newObj[name];
    localStorage.setItem('todo_listNew', JSON.stringify(newObj));
    setTasks(newTasks);
}

const TodoList = () => {
    let list = tasks.map((item) => {
        return (<div class="card">
        <div class="card-body">
          <h5 class="card-title">{item[0]}</h5>
          <p class="card-text">{item[1]}</p>
          <button type="button" className="btn btn-primary" onClick={() => deleteTask(item[0])}>Выполненно</button>
        </div>
      </div>);
    });
    return (
        <div>{list}</div>
    );
}

    let [taskName, setTaskValue] = useState();

    const updateValue = (e) => {
        setTaskValue(e.target.value);
    }
    
    let [taskDescription, setTaskDescriptionValue] = useState();

    const updateTaskDecriptionValue = (e) => {
        setTaskDescriptionValue(e.target.value);
    }

    const addNewTask = (e) => {
        e.preventDefault();
        let localStorageTasks = JSON.parse(localStorage.getItem('todo_listNew'));
        if(taskName.length < 1) {
            return;
        }
        localStorage.setItem('todo_listNew', JSON.stringify({
            ...localStorageTasks,
            [taskName]: taskDescription
        }));
        setTasks(Object.entries(JSON.parse(localStorage.getItem('todo_listNew'))));
        setTaskValue('');
        setTaskDescriptionValue('');
    }

    return (
        <div>
        <div className="addNewTaskBtn">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Добавить задачу</button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Добавить новую задачу</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
            </div>
            <div class="modal-body">
            <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Название Задачи</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={taskName} onChange={updateValue}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Описание Задачи</label>
                    <input className="form-control" id="exampleInputPassword1" value={taskDescription} onChange={updateTaskDecriptionValue}/>
                </div>
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={addNewTask}>Добавить</button>
            </div>
          </div>
        </div>
      </div>
        </div>
        <TodoList/>
        </div>
        
    );
}

export default TodoList;
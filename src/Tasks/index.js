import React from "react";
import "./style.css";

const onDelete = (name) => {
  console.log(`Nazwa zadania do usunięcia: ${name}`)
}

const Tasks = ({tasks, hideDone}) => (
  <ul className="tasks">
    {tasks.map(task => (
      <li key={task.id}
         className={`tasks__item ${task.done && hideDone ? "tasks__item--hidden" : ""}`}
      >
        <button  className="tasks__button">
          <span>
            {task.done ? "✓" : ""}
          </span>
        </button>
          <span className={`task__item ${task.done ? "tasks__item--done" : ""}`}>
            {task.content}
          </span>
        <button 
          className="tasks__button--remove"
          onClick={() => onDelete(task.content)}>
          <span>
            🗑
          </span>
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="tasks">
    {tasks.map(task => (
      <li key={task.id}
        className={`tasks__item ${task.done && hideDone ? "tasks__item--hidden" : ""}`}
      >
        <button
          className="tasks__button"
          onClick={() => toggleTaskDone(task.id)}
        >
          <span>
            {task.done ? "✓" : ""}
          </span>
        </button>
        <span className={`task__item ${task.done ? "tasks__item--done" : ""}`}>
          {task.content}
        </span>
        <button
          className="tasks__button--remove"
          onClick={() => removeTask(task.id)}>
          <span>
            🗑
          </span>
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
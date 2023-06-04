import { Item, Button, DoneTask } from "./styled.js"

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="tasks">
    {tasks.map(task => (
      <Item key={task.id}
      hidden={task.done && hideDone}
      >
        <Button
          className="tasks__button"
          onClick={() => toggleTaskDone(task.id)}
        >
          <span>
            {task.done ? "✓" : ""}
          </span>
        </Button>
        <DoneTask done={task.done}>
          {task.content}
        </DoneTask>
        <Button
          remove
          onClick={() => removeTask(task.id)}>
          <span>
            🗑
          </span>
        </Button>
      </Item>
    ))}
  </ul>
);

export default Tasks;
import { Item, Button, DoneTask, TasksList } from "./styled.js";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <TasksList>
    {tasks.map((task) => (
      <Item key={task.id} hidden={task.done && hideDone}>
        <Button onClick={() => toggleTaskDone(task.id)}>
          <span>{task.done ? "✓" : ""}</span>
        </Button>
        <DoneTask done={task.done}>{task.content}</DoneTask>
        <Button removeItem onClick={() => removeTask(task.id)}>
          <span>🗑</span>
        </Button>
      </Item>
    ))}
  </TasksList>
);

export default Tasks;

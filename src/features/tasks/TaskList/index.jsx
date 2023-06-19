import { Item, Button, DoneTask, Tasks } from "./styled.js";
import { useSelector } from "react-redux";
import { selectTasks } from "../tasksSlice";

const TaskList = ({ removeTask, toggleTaskDone }) => {
  const { tasks, hideDone } = useSelector(selectTasks);

  return (
    <Tasks>
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
    </Tasks>
  );
};

export default TaskList;

import { Item, Button, DoneTask, Tasks } from "./styled.js";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTasks } from "../tasksSlice";

const TaskList = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <Tasks>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button onClick={() => dispatch(toggleTaskDone(task.id))}>
            <span>{task.done ? "✓" : ""}</span>
          </Button>
          <DoneTask done={task.done}>{task.content}</DoneTask>
          <Button removeItem onClick={() => dispatch(removeTasks(task.id))}>
            <span>🗑</span>
          </Button>
        </Item>
      ))}
    </Tasks>
  );
};

export default TaskList;

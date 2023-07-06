import { Item, Button, DoneTask, Tasks, LinkElement } from "./styled.js";
import { useSelector, useDispatch } from "react-redux";
import {
  selectHideDone,
  toggleTaskDone,
  removeTasks,
  selectTasksByQuery,
} from "../../tasksSlice";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import searchQueryParam from "../../searchQueryParamName.js";

const TaskList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParam);

  const tasks = useSelector((state) => selectTasksByQuery(state, query));

  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <Tasks>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button onClick={() => dispatch(toggleTaskDone(task.id))}>
            <span>{task.done ? "✓" : ""}</span>
          </Button>
          <DoneTask done={task.done}>
            <LinkElement to={`/zadania/${task.id}`}>{task.content}</LinkElement>
          </DoneTask>
          <Button removeItem onClick={() => dispatch(removeTasks(task.id))}>
            <span>🗑</span>
          </Button>
        </Item>
      ))}
    </Tasks>
  );
};

export default TaskList;

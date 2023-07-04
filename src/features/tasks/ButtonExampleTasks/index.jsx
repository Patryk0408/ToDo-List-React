import { Button } from "./styled";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../tasksSlice.js";

const ButtonExampleTasks = () => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(fetchExampleTasks())}>
      Pobierz przykładowe zadania
    </Button>
  );
};

export default ButtonExampleTasks;

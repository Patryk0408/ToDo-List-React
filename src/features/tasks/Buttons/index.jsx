import { ButtonContainer, Button } from "./styled.js";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  toggleHideDone,
  setAllDone,
  fetchExampleTasks,
} from "../tasksSlice.js";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <ButtonContainer>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </Button>
      {tasks.length > 0 && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            disabled={tasks.every(({ done }) => done)}
            onClick={() => dispatch(setAllDone())}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </ButtonContainer>
  );
};

export default Buttons;

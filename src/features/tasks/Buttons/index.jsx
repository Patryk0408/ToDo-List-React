import { ButtonContainer, Button } from "./styled.js";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone } from "../tasksSlice.js";

const Buttons = ({ setAllDone }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <ButtonContainer>
      {tasks.length > 0 && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            disabled={tasks.every(({ done }) => done)}
            onClick={setAllDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </ButtonContainer>
  );
};

export default Buttons;

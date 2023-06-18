import { ButtonContainer, Button } from "./styled.js";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <ButtonContainer>
    {tasks.length > 0 && (
      <>
        <Button onClick={toggleHideDone}>
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

export default Buttons;
import { Button } from "./styled";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../tasksSlice.js";
import { useState, useEffect } from "react";

const ButtonExampleTasks = () => {
  const dispatch = useDispatch();
  const [buttonText, setButtonText] = useState("Pobierz przykładowe zadania");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    let timer;
    if (buttonText !== "Pobierz przykładowe zadania") {
      setIsButtonDisabled(true);
      timer = setTimeout(() => {
        setButtonText("Pobierz przykładowe zadania");
        setIsButtonDisabled(false);
      }, 1500);
    }
    return () => clearTimeout(timer);
  }, [buttonText]);

  const handleButtonClick = () => {
    setButtonText("Ładowanie...");
    dispatch(fetchExampleTasks());
  };

  return (
    <Button onClick={handleButtonClick} disabled={isButtonDisabled}>
      {buttonText}
    </Button>
  );
};

export default ButtonExampleTasks;

import { useState, useRef } from "react";
import { FormContainer, Input, Button } from "./styled.js";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedTaskContent = newTaskContent.trim();

    if (trimmedTaskContent) {
      addNewTask(trimmedTaskContent);
    }

    setNewTaskContent("");
  };

  const inputRef = useRef(null);

  return (
    <FormContainer onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button onClick={() => inputRef.current.focus()}>Dodaj zadanie</Button>
    </FormContainer>
  );
};

export default Form;

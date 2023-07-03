import { useState, useRef } from "react";
import { FormContainer, Input, Button } from "./styled.js";
import { useDispatch } from "react-redux";
import { addTask } from "../../tasksSlice.js";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedTaskContent = newTaskContent.trim();

    if (trimmedTaskContent) {
      dispatch(
        addTask({
          content: trimmedTaskContent,
          done: false,
          id: nanoid(),
        })
      );
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

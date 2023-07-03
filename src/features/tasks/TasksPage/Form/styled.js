import styled from "styled-components";

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  padding: 20px;

  @media (max-width: 767px) {
    grid-template-columns: auto;
  }
`;

export const Input = styled.input`
  max-width: 100%;
  padding: 8px;
`;

export const Button = styled.button`
  background-color: teal;
  color: #fff;
  border: none;
  padding: 8px;
  transition: background 0.5s, transform 1s;

  &:hover {
    background-color: hsl(180, 100%, 35%);
    transform: scale(1.1);
    cursor: pointer;
  }
`;

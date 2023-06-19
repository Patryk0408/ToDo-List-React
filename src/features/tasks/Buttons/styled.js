import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: teal;
  transition: 0.3s;
  margin: 0 0 0 20px;

  &:hover {
    color: hsl(180, 100%, 35%);
    cursor: pointer;
  }

  &:disabled {
    color: rgb(172, 172, 172);
    cursor: not-allowed;
  }

  @media (max-width: 767px) {
    flex-basis: 100%;
    margin: 20px;
  }
`;

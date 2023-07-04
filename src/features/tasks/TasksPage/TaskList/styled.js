import styled, { css } from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const LinkElement = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.teal};
`;

export const Tasks = styled.ul`
  padding: 0px;
  margin: 0;
  word-break: break-word;
`;

export const Item = styled.li`
  padding: 20px;
  border-bottom: 2px solid ${({ theme }) => theme.color.Seashell};
  list-style-type: none;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 20px;
  align-items: center;

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.green};
  border: none;
  width: 35px;
  height: 35px;
  transition: 0.3s;
  color: #fff;
  font-size: 20px;

  &:hover {
    background-color: hsl(120, 100%, 30%);
    cursor: pointer;
  }

  ${({ removeItem }) =>
    removeItem &&
    css`
      background-color: red;
      font-size: 25px;
      font-weight: bold;

      &:hover {
        background-color: hsl(0, 100%, 60%);
        cursor: pointer;
      }
    `};
`;

export const DoneTask = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

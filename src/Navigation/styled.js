import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  color: ${({ theme }) => theme.color.white};
  font-size: large;

  &.active {
    font-weight: 900;
  }
`;

export const UnOrderList = styled.ul`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.teal};
  height: 70px;
  width: 100%;
  position: fixed;
  margin: 0;
`;

export const ListElement = styled.li`
  list-style-type: none;
`;

import { toTasks, toAuthor } from "../routes";
import { StyledNavLink, ListElement, UnOrderList } from "./styled";

const Navigation = () => {
  return (
    <UnOrderList>
      <ListElement>
        <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
      </ListElement>
      <ListElement>
        <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
      </ListElement>
    </UnOrderList>
  );
};

export default Navigation;

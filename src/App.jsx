import { StyledNavLink, ListElement, UnOrderList } from "./styled";
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import AuthorPage from "./features/author/AuthorPage";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";

export const App = () => (
  <HashRouter>
    <nav>
      <UnOrderList>
        <ListElement>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </ListElement>
        <ListElement>
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </ListElement>
      </UnOrderList>
      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);

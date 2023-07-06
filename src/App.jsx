import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import AuthorPage from "./features/author/AuthorPage";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import { toAuthor, toTask, toTasks } from "./routes";
import Navigation from "./Navigation";

export const App = () => (
  <HashRouter>
    <Navigation />

    <nav>
      <Switch>
        <Route path={toTask()}>
          <TaskPage />
        </Route>
        <Route path={toTasks()}>
          <TasksPage />
        </Route>
        <Route path={toAuthor()}>
          <AuthorPage />
        </Route>
        <Route>
          <Redirect to={toTasks()} />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);

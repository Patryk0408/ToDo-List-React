import {
  takeLatest,
  put,
  call,
  delay,
  takeEvery,
  select,
} from "redux-saga/effects";
import {
  fetchExampleTasks,
  selectTasks,
  fetchExampleTasksError,
  fetchExampleTasksSuccess,
} from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
  try {
    yield delay(1500);
    const exampleTasks = yield call(getExampleTasks);
    yield put(fetchExampleTasksSuccess(exampleTasks));
  } catch (error) {
    yield put(fetchExampleTasksError);
    yield call(alert, "Coś poszło nie tak!");
  }
}

function* saveTasksInLocalStorageHandler() {
  const { tasks } = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* watchFetchExampleTasks() {
  console.log("Saga jest podłączona");
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}

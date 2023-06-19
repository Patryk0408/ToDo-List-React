import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./GlobalStyle";
import store from "./store";
// import { configureStore } from '@reduxjs/toolkit'

// const initialState = {
// 	tasks: [],
// }

// const tasksReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case 'addTask':
// 			return {
// 				...state,
// 				tasks: [
// 					...state.tasks,
// 					{
// 						content: action.payload,
// 					},
// 				],
// 			}

// 		default:
// 			return state
// 	}
// }

// const addTask = content => ({
// 	type: 'addTask',
// 	payload: content,
// })

// const selectTasks = ({ tasks }) => tasks

// const store = configureStore({ reducer: tasksReducer })
// console.log(selectTasks(store.getState()))

// store.dispatch(addTask('zadanie 1'))
// console.log(selectTasks(store.getState()))

// store.dispatch(addTask('zadanie 2'))

// console.log(selectTasks(store.getState()))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

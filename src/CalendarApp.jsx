import React from "react";
import { Provider } from "react-redux";
import { AppRouter } from "./router";
import { store } from "./store/store";

const CalendarApp = () => {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
};

export default CalendarApp;

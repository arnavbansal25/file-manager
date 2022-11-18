import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainComponent from "./components/MainComponent";
import { Provider } from "react-redux";

import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  );
}

export default App;

import ReactDOM from "react-dom";
import { App } from "./App";

import { Provider } from "react-redux";
import { store } from "./store";

const Application = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const rootElement = document.getElementById("root");

ReactDOM.render(<Application />, rootElement);

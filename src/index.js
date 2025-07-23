import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom"; // ✅ ADD THIS
import App from "./App";
import {store} from "./redux/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter> {/* ✅ FIX */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

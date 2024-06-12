import React from "react";
import ReactDOM from "react-dom/client";
import { appRouter } from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./SliceComponents/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
       <RouterProvider router={appRouter}/>
  </Provider>
);

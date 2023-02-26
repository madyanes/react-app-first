import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@/styles/app.css";
import TodoApp from "@/components/TodoApp";

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* or we can use its alias <Router></Router> */}
      <TodoApp />
    </BrowserRouter>
  </React.StrictMode>
);

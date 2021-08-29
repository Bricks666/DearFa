import React from "react";
import ReactDOM from "react-dom";
import { Page } from "./Components/Page/Page";
import { store } from "./Redux/reduxStore";

import "./index.css";

function rerenderEntireTree() {
  return ReactDOM.render(
    <React.StrictMode>
      <Page store={store} />
    </React.StrictMode>,
    document.getElementById("root")
  );
}
store.subscribe(rerenderEntireTree);

rerenderEntireTree();

import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";

import Form from "./components/Form";
import FormStore from "./stores/FormStore";

const store = new FormStore();

render(
  <div>
    <DevTools />
    <Form store={store} />
  </div>,
  document.getElementById("root")
);

// playing around in the console
window.store = store;

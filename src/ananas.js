import React from "react";
import ReactDOM from "react-dom";
import DemoComponent from "../demo-component";
import PropPanel from "./components/props-panel/props-panel";

const demoProps = DemoComponent.demoProps;

import { ananas, demo_component } from "./ananas.scss";

const Ananas = props => (
  <div className={ananas}>
    <PropPanel props={props} />
    <div className={demo_component}>
      <DemoComponent {...demoProps} />
    </div>
  </div>
);

ReactDOM.render(<Ananas {...demoProps} />, document.querySelector(".root"));

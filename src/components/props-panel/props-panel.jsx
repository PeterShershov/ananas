import React from "react";
import Prop from "./prop/prop";

import { props_panel } from "./props-panel.scss";

const PropPanel = ({ props, className }) => (
  <div className={props_panel}>
    {Object.keys(props).map(key => (
      <Prop key={key} prop={props[key]} title={key} />
    ))}
  </div>
);

export default PropPanel;

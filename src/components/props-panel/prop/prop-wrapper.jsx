import React from "react";
import classnames from "classnames";

import { prop_wrapper } from "./prop-wrapper.scss";

const PropWrapper = ({ title, className, children }) => (
  <div className={classnames(prop_wrapper, className)}>
    {title && `${title}: `}
    {children}
  </div>
);

export default PropWrapper;

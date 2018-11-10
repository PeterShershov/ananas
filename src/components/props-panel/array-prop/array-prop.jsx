import React from "react";

import Prop from "../prop/prop";
import ExpandableList from "../../expandable-list/expendable-list";
import { ARRAY } from "../../../constants";

import { array_prop, array_child } from "./array-prop.scss";

const ArrayProp = ({ prop, title }) => {
  const components = prop.map((element, index) => (
    <Prop className={array_child} prop={element} key={index} />
  ));
  title = `${title}: ${ARRAY}`;
  return <ExpandableList labelClassName={array_prop} label={title}>{components}</ExpandableList>;
};

export default ArrayProp;

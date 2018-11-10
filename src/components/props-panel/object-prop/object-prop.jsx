import React, { memo } from "react";

import Prop from "../prop/prop";
import ExpandableList from "../../expandable-list/expendable-list";

import { OBJECT } from "../../../constants";

import { object_prop } from "./object-prop.scss";

const ObjectProp = ({ prop, title }) => {
  title = `${title}: ${OBJECT}`;
  const components = Object.keys(prop).map(key => (
    <Prop key={key} prop={prop[key]} title={key} />
  ));

  return (
    <ExpandableList labelClassName={object_prop} label={title}>
      {components}
    </ExpandableList>
  );
};
export default ObjectProp;

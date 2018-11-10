import React from "react";
import type from "type-detect";

import ObjectProp from "../object-prop/object-prop";
import ArrayProp from "../array-prop/array-prop";
import PropWrapper from "./prop-wrapper";

import { OBJECT, STRING, NUMBER, BOOLEAN, ARRAY, FUNCTION } from "../../../constants";

const Prop = ({ prop, title, className }) => {
  switch (type(prop)) {
    case STRING:
      return (
        <PropWrapper className={className} title={title}>
          "{prop}"
        </PropWrapper>
      );
    case NUMBER:
      return (
        <PropWrapper className={className} title={title}>
          {prop}
        </PropWrapper>
      );
    case FUNCTION:
      return (
        <PropWrapper className={className} title={title}>
          {prop.toString()}
        </PropWrapper>
      );
    case BOOLEAN:
      return (
        <PropWrapper className={className} title={title}>
          {prop.toString()}
        </PropWrapper>
      );
    case OBJECT:
      return <ObjectProp prop={prop} title={title} />;
    case ARRAY:
      return <ArrayProp prop={prop} title={title} />;
    default:
      return (
        <PropWrapper className={className} title={title}>
          {prop}
        </PropWrapper>
      );
  }
};

export default Prop;

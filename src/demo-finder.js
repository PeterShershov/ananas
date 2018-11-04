import React from "react";
import ReactDOM from "react-dom";
import Ananas from "./ananas";
import { getType, isObject } from "mini-type";

const demoProps = Ananas.demoProps;

function getComponentByProp(prop) {
  switch (getType(prop)) {
    case "string":
      return <span>"{prop}"</span>;
    case "number":
      return <span>{prop}</span>;
    case "boolean":
      return <span>{prop.toString()}</span>;
    case "object":
      return componentsByObject(prop);
    case "array":
      return prop.map((element, index) => (
        <div key={element + index}>
          [<div>{getComponentByProp(element)}</div>]
        </div>
      ));
  }
}

function componentsByObject(objectProp) {
  const components = [];
  for (const key of Object.keys(objectProp)) {
    if (isObject(objectProp[key])) {
      componentsByObject(objectProp[key]);
    }

    components.push(
      <div key={key}>
        {key}: {getComponentByProp(objectProp[key])}
      </div>
    );
  }

  return components;
}

function generateStage(props) {
  const components = [];
  for (const key of Object.keys(demoProps)) {
    components.push(
      <div key={key}>
        {key}: {getComponentByProp(demoProps[key])}
      </div>
    );
  }

  return components;
}

const Demo = props => <Ananas {...props}>{generateStage(demoProps)}</Ananas>;

ReactDOM.render(<Demo {...demoProps} />, document.querySelector(".root"));

import React, { PureComponent } from "react";

class DemoComponent extends PureComponent {
  static demoProps = {
    firstLevelObject: { secondLevelObject: { string: "boom" } },
    array: ["yep", "yep"],
    number: 1
  };

  render() {
    return <div>I AM THE ACTUAL COMPONENT</div>;
  }
}

export default DemoComponent;

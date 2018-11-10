import React, { PureComponent } from "react";

class DemoComponent extends PureComponent {
  static demoProps = {
    object: { secondLevelObject: { string: "boom" } },
    array: ["yep", "yep"],
    function: () => 2
  };

  render() {
    return <div>I AM THE ACTUAL COMPONENT</div>;
  }
}

export default DemoComponent;

import { PureComponent } from "React";

class Ananas extends PureComponent {
  static demoProps = {
    yeפ: "yep!",
    working: {
      piece: "of software",
      recognizing: "objects",
      like: {
        a: ["boss"],
        cause: "i am",
        number: 1
      }
    }
  };

  render() {
    return this.props.children;
  }
}

export default Ananas;

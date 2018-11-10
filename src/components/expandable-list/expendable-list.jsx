import React, { PureComponent } from "react";
import classnames from "classnames";

import { expandable_list, list_label, list } from "./expendable-list.scss";

class ExpandableList extends PureComponent {
  state = {
    isExpanded: false
  };

  toggleList = () => this.setState({ isExpanded: !this.state.isExpanded });

  render() {
    const { isExpanded } = this.state;
    const { label, labelClassName, className, children } = this.props;

    return (
      <div className={classnames(expandable_list, className)}>
        <button
          className={classnames(list_label, labelClassName)}
          onClick={this.toggleList}
        >
          {label}
        </button>
        {isExpanded && <div className={list}>{children}</div>}
      </div>
    );
  }
}

export default ExpandableList;

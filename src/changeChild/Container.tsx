import React, { Component } from "react";

interface Props {}
interface State {}

class Container extends Component<Props, State> {
  constructor(props) {
    super(props);
    console.log(props.children);
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default Container;

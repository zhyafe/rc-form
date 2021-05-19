import React, { Component } from "react";

interface Props {
  data: string;
}
interface State {}

class Button extends Component<Props, State> {
  state = {};

  render() {
    return <div>btn{this.props.data}</div>;
  }
}

export default Button;

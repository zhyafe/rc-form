import React, { Component } from "react";
import Button from "./Button";
import TestRenderer from "react-test-renderer";

interface Props {}
interface State {}

class App extends Component<Props, State> {
  state = {};

  componentDidMount() {
    const instance = TestRenderer.create(<Button data="a" />);
    console.log("instance", instance);
    console.log("toJSON", instance.toJSON());
    console.log("toTree", instance.toTree());
  }

  render() {
    return (
      <div>
        <p>test</p>
        <Button data="a" />
      </div>
    );
  }
}

export default App;

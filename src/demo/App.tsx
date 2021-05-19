import _ from "lodash";
import React, { Component } from "react";
import Form from "./Form";

interface Props {}
interface State {}

class App extends Component<Props, State> {
  state = {};
  click = _.throttle(() => {
    console.log("click");
  }, 3000);

  render() {
    return (
      <div>
        <p>demo page</p>
        <Form />
      </div>
    );
  }
}

export default App;

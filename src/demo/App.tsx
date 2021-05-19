import _ from "lodash";
import React, { Component } from "react";

interface Props {}
interface State {}

class App extends Component<Props, State> {
  state = {};
  click = _.throttle(() => {
    console.log("click");
  }, 3000);

  render() {
    return <div onClick={this.click}>demo page</div>;
  }
}

export default App;

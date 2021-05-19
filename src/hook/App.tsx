import React, { Component } from "react";
import SetIntervalView from "./SetIntervalView";
import UseCallbackView from "./UseCallbackView";
import UseEffectView from "./UseEffectView";
import UseMemoView from "./UseMemoView";
import UseRefView from "./UseRefView";
import UseStateView from "./UseStateView";

interface Props {}
interface State {}

class App extends Component<Props, State> {
  state = { isShow: true };

  render() {
    return (
      <>
        {/* <UseStateView /> */}
        {/* {this.state.isShow && <UseEffectView />} */}
        {/* <UseCallbackView /> */}
        {/* <UseMemoView /> */}
        {/* <UseRefView /> */}
        <SetIntervalView />
        <p
          onClick={() => {
            this.setState({ isShow: false });
          }}
        >
          ddd
        </p>
      </>
    );
  }
}

export default App;

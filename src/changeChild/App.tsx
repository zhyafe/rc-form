import React, { ReactElement, useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";
import Container from "./Container";

interface Props {}

function App({}: Props): ReactElement {
  const [state, setstate] = useState(true);
  return (
    <div>
      <p onClick={() => setstate(!state)}>changeChild</p>
      <Container>{state ? <ChildA></ChildA> : <ChildB></ChildB>}</Container>
    </div>
  );
}

export default App;

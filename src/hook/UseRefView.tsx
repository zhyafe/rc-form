import React, { ReactElement, useCallback, useRef, useState } from "react";

interface Props {}

function UseRefView({}: Props): ReactElement {
  const ref = useRef<any>();
  const [count, setCount] = useState(0);

  const onclick = () => {
    setCount(3);
    let id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
  };

  return <div onClick={onclick}>count: {count || "验证码"}</div>;
}

export default UseRefView;

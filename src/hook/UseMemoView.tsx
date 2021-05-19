import React, { ReactElement, useMemo, useRef, useState } from "react";

interface Props {}

let localMemo: any = null;

export default function UseMemoView({}: Props): ReactElement {
  const [count, setCount] = useState(0);
  const memofn = () => {
    console.log("---------run");
    return "22";
  };
  let memo = useMemo(memofn, []);
  console.log("值相等", memo === localMemo);
  localMemo = memo;
  return (
    <div>
      memo {count} <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}

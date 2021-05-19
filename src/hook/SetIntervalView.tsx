import React, { ReactElement, useEffect, useRef, useState } from "react";

interface Props {}

function SetIntervalView({}: Props): ReactElement {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    console.log("---------a");
    return () => {
      console.log("---------b");
      clearInterval(interval);
    };
  }, []);

  const [count2, setCount2] = useState(1);
  const ref = useRef(() => {});
  ref.current = function () {
    setCount2(count2 + 1);
  };
  useEffect(() => {
    let interval = setInterval(() => {
      ref.current();
    }, 1000);
    console.log("---------a");
    return () => {
      console.log("---------b");
      clearInterval(interval);
    };
  }, []);

  const [count3, setCount3] = useState(0);
  const ref2 = useRef(() => {});
  ref2.current = function () {
    setCount3(count);
  };
  useEffect(() => {
    let id = setTimeout(() => {
      ref2.current();
    }, 3000);
    return () => {
      clearTimeout(id);
    };
  }, []);
  return (
    <div>
      {count}setInterval{count2}
      <p>{count3}</p>
    </div>
  );
}

export default SetIntervalView;

// 参考 https://raoenhui.github.io/react/2019/11/07/hooksSetinterval/

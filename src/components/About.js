import React, { memo, useState, useMemo, forwardRef } from "react";

export default forwardRef((props, ref)=> memo((props) => {
  console.log("About render");
  const [count,setCount] = useState(1)

  const double = useMemo(() => count * 2, [count===3])

  return (
    <div>
      <div>Count : {count}</div>
      <div>double: {double}</div>
      <button size="" type="" onClick={props.onClick}>
        点击
      </button>
    </div>
  );
}))

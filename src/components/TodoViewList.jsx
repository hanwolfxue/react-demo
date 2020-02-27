import React, { forwardRef } from "react";

export default forwardRef(function TodoViewList(props, ref) {
  return (
    <div>
      <input ref={ref} value="我是Input"></input>
    </div>
  );
});

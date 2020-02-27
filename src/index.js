import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useCallback,
  useState,
  useEffect,
} from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import TodoViewList from './components/TodoViewList'

// function TextInputWithFocusButton() {
//   const inputEl = useRef(null);
//   const onButtonClick = () => {
//     // `current` 指向已挂载到 DOM 上的文本输入元素
//     inputEl.current.focus();
//   };
//   return (
//     <>
//       {/* <input ref={inputEl} type="text" /> */}
//       <TextInput ref={inputEl}></TextInput>
//       <button onClick={onButtonClick}>Focus the input</button>
//     </>
//   );
// }

function TextInputWithFocusButton() {
  // const inputEl = useRef(null);
  // const [value, setValue] = useState();
  const inputEl = useCallback(node => {
    if (node !== null) {
      console.log("TCL: TextInputWithFocusButton -> node.value", node.value)
      setValue(node.value);
    }
  }, []);
  const [value, setValue] = useState("");
  // useEffect(() => {
  //   setValue(inputEl.current.value);
  // }, [inputEl]);
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    console.log("input值", inputEl.current.value);
    setValue(inputEl.current.value);
  };
  return (
    <>
      <div>
        子组件: <TextInput ref={inputEl}></TextInput>
      </div>
      <div>
        父组件: <input type="text" value={value} onChange={() => {}} />
      </div>
      {/* <button onClick={onButtonClick}>获得值</button> */}
    </>
  );
}

const TextInput = forwardRef((props, ref) => {
  const [value, setValue] = useState("");
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    value: inputRef.current.value,
  }));
  const changeValue = e => {
    setValue(e.target.value);
  };
  return <input ref={inputRef} value={value} onChange={changeValue}></input>;
});

// const TextInput =  forwardRef((props,ref) => {
//   const inputRef = useRef();
//   useImperativeHandle(ref, () => ({
//     focus: () => {
//       inputRef.current.focus();
//     }
//   }));
//   return <input ref={inputRef}></input>
// })

const App = () => {
  // const ref = useRef()
  // const inputFocus = ()=>{
  //   ref.current.focus();
  // }
  return (
    <div style={{ margin: "100px" }}>
      <TextInputWithFocusButton></TextInputWithFocusButton>
    </div>
    // <div>
    //   <button onClick={inputFocus}>聚焦</button>
    //   <TodoViewList ref={ref}></TodoViewList>
    // </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

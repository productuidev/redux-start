import { useRef } from "react";

// uncontrolled components
export default function TodoForm() {
  const inputRef = useRef();

  return (
    <div>
      <input ref={inputRef} /> <button onClick={click}>추가</button>
    </div>
  );

  // 버튼 클릭 시 addTodo 액션
  // dispatch
  function click() {
    // dispatch(addTodo(inputRef.current.value));
  }
}
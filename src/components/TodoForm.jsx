import { useRef } from "react";
import { addTodo } from "../redux/actions";
import useReduxDispatch from './../hooks/useReduxDispatch';

// uncontrolled components
export default function TodoForm() {
  const inputRef = useRef();
  const dispatch = useReduxDispatch();

  return (
    <div>
      <input ref={inputRef} /> <button onClick={click}>추가</button>
    </div>
  );

  // 버튼 클릭 시 addTodo 액션
  // dispatch
  function click() {
    dispatch(addTodo(inputRef.current.value));
  }
}
import { useRef } from "react";
import { connect } from 'react-redux';
import { addTodo } from "../redux/actions";

// 위쪽으로 이동
// TodoForm은 함수를 받아서 보여주는 역할(Presentational Component)
// Container가 주는 data를 받아서 그냥 보여주거나 실행함
function TodoForm({ add }) {
  const inputRef = useRef();

  return (
    <div>
      <input ref={inputRef} /> <button onClick={click}>추가</button>
    </div>
  );

  // 버튼 클릭 시 addTodo 액션
  // dispatch
  function click() {
    // 직접 dispatch하지 않고 add를 props으로 받아서 실행
    add(inputRef.current.value);
  }
}

// Container = Smart Component로 역할 분리
// Store와 Presentatinal Component를 이어주는 역할 = connect
export default connect(
  (state) => ({}),

  // todos를 실행하는 로직
  (dispatch) => ({
    add: (text) => {
      dispatch(addTodo(text));
    }
  })
)(TodoForm);
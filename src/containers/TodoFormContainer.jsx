// import { connect } from 'react-redux';
import { useCallback } from "react";
import { addTodo } from "../redux/actions";
import { useDispatch } from 'react-redux';
import TodoForm from '../components/TodoForm';

// 정확한 Container로 분리
// Container = Smart Component로 역할 분리
// Store와 Presentatinal Component를 이어주는 역할 = connect

// const TodoFormContainer = connect(
//   (state) => ({}),

//   // todos를 실행하는 로직
//   (dispatch) => ({
//     add: (text) => {
//       dispatch(addTodo(text));
//     }
//   })
// )(TodoForm);

// useDispatch hook 활용
// 실행될 때마다 add에 새로운 함수를 찔러넣어주므로
// useCallback으로 처리 (dispatch 함수가 deps하여 새로 만들어질 때 다시 만들어짐)
// store가 달라지지 않으므로 처음에 만든 것과 똑같은 형식 (불필요하게 새로 만들어지지 x)
export default function TodoFormContainer() {
  const dispatch = useDispatch();

  const add = useCallback((text)=>{
    dispatch(addTodo(text));
  }, [dispatch]);

  return <TodoForm add={add} />
};
import { connect } from 'react-redux';
import { addTodo } from "../redux/actions";
import TodoForm from '../components/TodoForm';

// 정확한 Container로 분리
// Container = Smart Component로 역할 분리
// Store와 Presentatinal Component를 이어주는 역할 = connect

const TodoFormContainer = connect(
  (state) => ({}),

  // todos를 실행하는 로직
  (dispatch) => ({
    add: (text) => {
      dispatch(addTodo(text));
    }
  })
)(TodoForm);

export default TodoFormContainer;
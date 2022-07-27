import { connect } from 'react-redux';

// 위쪽으로 이동
// Props로 todos를 받아서 map
function TodoList({todos}) {
  return (
    <ul>
      {todos.map((todo)=>{
        return <li>{todo.text}</li>;
      })}
    </ul>
  );
}

// react-redux의 함수 사용하기 위해 가져와서 실행
// 실행한 결과물이 HOC 함수가 되므로 다시 한번 실행
// 실행한 결과가 Container
// 만들어진 TodoListContainer를 export default

// state 객체를 받아서 Props로 만들기
const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

// dispatch 객체를 받아서 Props로 만들기
const mapDispatchToProps = (dispatch) => {
  return {};
};

// connect가 config하는 인자 2개 함수
// HOC의 인자
const TodoListContainer = connect(mapStateToProps,mapDispatchToProps)(TodoList);

export default TodoListContainer;
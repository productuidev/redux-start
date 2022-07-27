// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import TodoList from '../components/TodoList';

// react-redux의 함수 사용하기 위해 가져와서 실행
// 실행한 결과물이 HOC 함수가 되므로 다시 한번 실행
// 실행한 결과가 Container
// 만들어진 TodoListContainer를 export default

// state 객체를 받아서 Props로 만들기
// const mapStateToProps = (state) => {
//   return {
//     todos: state.todos,
//   };
// };

// dispatch 객체를 받아서 Props로 만들기
// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

// connect가 config하는 인자 2개 함수
// HOC의 인자
// const TodoListContainer = connect(mapStateToProps,mapDispatchToProps)(TodoList);

// jsx를 리턴하는 컴포넌트
// TodoListContainer가 하는 일 : store 연결 > data 꺼내서 > 필요한 것을 props로 넣어주기
// useSelector hook을 사용하면 좀 더 편하게 하는 일을 명시적으로 보여줄 수 있음
// 하위 컴포넌트에 찔러넣어주는 형태로 변경
function TodoListContainer() {
  const todos = useSelector((state)=>state.todos);

  return <TodoList todos={todos} />;
}

export default TodoListContainer;
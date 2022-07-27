import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useContext } from 'react';
import { addTodo } from './redux/actions';
import ReduxContext from './contexts/ReduxContext';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


// 공통 로직
// dispatch를 반환하면 그 결과물을 useReduxDispatch로 가져올 수 있음
function useReduxDispatch() {
  const store = useContext(ReduxContext);

  return store.dispatch;
}

function App() {
  // 공통 로직
  // state를 반환하면 그 결과물을 useReudxState로 가져올 수 있음
  const state = useReduxState();
  const dispatch = useReduxDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {JSON.stringify(state)} {/* 객체를 JSON 문자열로 변환*/}
        <button onClick={click}>추가</button>
      </header>
      <TodoList />
      <TodoForm />
    </div>
  );

  // 버튼 클릭 시 addTodo 액션
  // dispatch
  function click() {
    dispatch(addTodo("todo"));
  }
}

export default App;

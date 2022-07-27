import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useContext } from 'react';
import { addTodo } from './redux/actions';
import ReduxContext from './contexts/ReduxContext';

function useReduxState() {
  const store = useContext(ReduxContext);
  const [state, setState] = useState(store.getState()); // 초기값

  useEffect(()=>{
    const unsubscribe = store.subscribe(()=>{
      setState(store.getState());
    });

    return () => {
      unsubscribe();
    };
  }, [store]); // dependency

  // store가 들어올 때, 다른 store면 다시 실행하는 것이므로 검토해보면
  // index.js에서 다른 store를 다시 넣어주는 경우는 없음
  // 결과적으로 1번만 실행

  return state;
}

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
    </div>
  );

  // 버튼 클릭 시 addTodo 액션
  // dispatch
  function click() {
    dispatch(addTodo("todo"));
  }
}

export default App;

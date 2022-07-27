import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store';
// import { addTodo, completeTodo, showComplete } from './redux/actions';
import ReduxContext from './contexts/ReduxContext';

// store 상태 구독
store.subscribe(()=>{
  console.log(store.getState());
});

// store.dispatch(addTodo("할일"));
// store.dispatch(completeTodo(0));
// store.dispatch(showComplete());


// const unsubscribe = store.subscribe(()=>{
//   console.log(store.getState());
// });

// console.log(store);

// store 상태 변경 시키기
// store.dispatch(addTodo("coding"));
// store.dispatch(addTodo("reading"));
// store.dispatch(addTodo("eating"));

// unsubscribe();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxContext.Provider value={store}>
      <App />
    </ReduxContext.Provider>
  </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { addTodo } from './redux/actions';

// store 상태 구독
const unsubscribe = store.subscribe(()=>{
  console.log(store.getState());
});

// console.log(store);

// store 상태 변경 시키기
store.dispatch(addTodo("coding"));
store.dispatch(addTodo("reading"));
store.dispatch(addTodo("eating"));

unsubscribe();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

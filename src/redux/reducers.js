import { ADD_TODO, COMPLETE_TODO, SHOW_ALL, SHOW_COMPLETE } from './actions';
import { combineReducers } from 'redux';

// state 모습 구상 (배열)
// ['코딩', '휴식', ''];
// [{text: '코딩', done:false}, {text: '휴식', done:false}]
// const ininitialState = []; // 미리 초기값

// {todos: [{text: '코딩', done:false}, {text: '휴식', done:false}], filter: 'ALL'}
const ininitialState = {todos: [], filter: 'ALL'};

// store에서 받을 수 있도록 초기 상태를 reducer 위로 옮기기
const todoIntialState = ininitialState.todos;
const filterInitialState = ininitialState.filter;

const reducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
});

export default reducer;

// todoApp을 todoReducer로 변경
// todoReducer에는 todo에 관련된 로직만 남기기
// 배열 상태로 바꿔서 리턴하기
// {todos: [{text: '코딩', done:false}, {text: '휴식', done:false}], filter: 'ALL'}
function todosReducer(previousState = todoIntialState, action) {
  if(action.type === ADD_TODO) {
    return [...previousState, {text:action.text, done:false}];
  }

  if(action.type === COMPLETE_TODO) {
    return previousState.map((todo, index)=>{
      if (index === action.index) {
        return { ...todo, done:true };
      }
      return todo;
    });
  }

  return previousState;
}

// todoApp 복사해서 filterReducer로 변경
// filterReducer에는 filter에 관련된 로직만 남기기
// 객체가 아닌 값으로 리턴하기
function filterReducer(previousState = filterInitialState, action) {
  if (action.type === SHOW_COMPLETE) {
    return "COMPLETE";
  }

  if (action.type === SHOW_ALL) {
    return "ALL";
  }

  return previousState;
}
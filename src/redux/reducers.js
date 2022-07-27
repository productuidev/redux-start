import { ADD_TODO, COMPLETE_TODO, SHOW_ALL, SHOW_COMPLETE } from './actions';

// state 모습 구상 (배열)
// ['코딩', '휴식', ''];
// [{text: '코딩', done:false}, {text: '휴식', done:false}]
// const ininitialState = []; // 미리 초기값

// {todos: [{text: '코딩', done:false}, {text: '휴식', done:false}], filter: 'ALL'}
const ininitialState = {todos: [], filter: 'ALL'};

export function todoApp(previousState = ininitialState, action) {
  // 초기값을 설정해주는 부분
  // if(previousState === undefined){
  //   return [];
  // }

  // ADD_TODO
  if(action.type === ADD_TODO) {
    // return [...previousState, action.todo];
    // return [...previousState, {text:action.text, done:false}];
    return {
      ...previousState, // 필터를 가지고 있도록 처리
      todos: [...previousState.todos, {text:action.text, done:false}] };
  }

  // COMPLETE_TODO
  if(action.type === COMPLETE_TODO) {
    return {
      ...previousState, // 필터를 가지고 있도록 처리
      todos: previousState.todos.map((todo, index)=>{
        if (index === action.index) {
          return { ...todo, done:true };
        }
        return todo;
    })};
  }

  if (action.type === SHOW_COMPLETE) {
    return {
      ...previousState,
      filter: "COMPLETE",
    }
  }

  if (action.type === SHOW_ALL) {
    return {
      ...previousState,
      filter: "ALL",
    }
  }

  return previousState;
}
import { ADD_TODO, COMPLETE_TODO } from '../actions';

// todoApp을 todoReducer로 변경
// todoReducer에는 todo에 관련된 로직만 남기기
// 배열 상태로 바꿔서 리턴하기
// {todos: [{text: '코딩', done:false}, {text: '휴식', done:false}], filter: 'ALL'}

const ininitialState = [];

export default function todos(previousState = ininitialState, action) {
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
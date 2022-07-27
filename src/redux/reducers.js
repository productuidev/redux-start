import { ADD_TODO } from './actions';
import { COMPLETE_TODO } from './actions';

// state 모습 구상 (배열)
// ['코딩', '휴식', ''];
// [{text: '코딩', done:false}, {text: '휴식', done:false}]
const ininitialState = []; // 미리 초기값

export function todoApp(previousState = ininitialState, action) {
  // 초기값을 설정해주는 부분
  // if(previousState === undefined){
  //   return [];
  // }

  // ADD_TODO
  if(action.type === ADD_TODO) {
    // return [...previousState, action.todo];
    return [...previousState, {text:action.text, done:false}];
  }

  // COMPLETE_TODO
  if(action.text === COMPLETE_TODO) {
    return previousState.map((todo, index)=>{
      
      if (index === action.index) {
        return { ...todo, done: true };
      }

      return todo;

    });
  }

  return previousState;
}
import { ADD_TODO } from './actions';

// state 모습 구상 (배열)
// ['코딩', '휴식', ''];
// [{text: '코딩', done:false}, {text: '휴식', done:false}]
const ininitialState = []; // 미리 초기값

export function todoApp(previousState = ininitialState, action) {
  // 초기값을 설정해주는 부분
  // if(previousState === undefined){
  //   return [];
  // }

  if(action.type === ADD_TODO) {
    // return [...previousState, action.todo];
    return [...previousState, {text:action.text, done:false}];
  }

  return previousState;
}
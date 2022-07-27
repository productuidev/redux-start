import { ADD_TODO } from './actions';

// state 모습 구상 (배열)
// ['코딩', '휴식', ''];

const ininitialState = []; // 미리 초기값

function todoApp(previousState = ininitialState, action) {
  // 초기값을 설정해주는 부분
  // if(previousState === undefined){
  //   return [];
  // }

  if(action.type === ADD_TODO) {
    return [...previousState, action.todo];
  }

  return previousState;
}
import { SHOW_ALL, SHOW_COMPLETE } from '../actions';

// todoApp 복사해서 filterReducer로 변경
// filterReducer에는 filter에 관련된 로직만 남기기
// 객체가 아닌 값으로 리턴하기

const ininitialState = [];

export default function filter(previousState = ininitialState, action) {
  if (action.type === SHOW_COMPLETE) {
    return "COMPLETE";
  }

  if (action.type === SHOW_ALL) {
    return "ALL";
  }

  return previousState;
}
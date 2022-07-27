import { useContext } from 'react';
import ReduxContext from '../contexts/ReduxContext';

// 공통 로직
// dispatch를 반환하면 그 결과물을 useReduxDispatch로 가져올 수 있음

export default function useReduxDispatch() {
  const store = useContext(ReduxContext);

  return store.dispatch;
}


import { useState, useEffect, useContext } from 'react';
import ReduxContext from '../contexts/ReduxContext';

// 공통 로직
// state를 반환하면 그 결과물을 useReudxState로 가져올 수 있음

export default function useReduxState() {
  const store = useContext(ReduxContext);
  const [state, setState] = useState(store.getState()); // 초기값

  useEffect(()=>{
    const unsubscribe = store.subscribe(()=>{
      setState(store.getState());
    });

    return () => {
      unsubscribe();
    };
  }, [store]); // dependency

  // store가 들어올 때, 다른 store면 다시 실행하는 것이므로 검토해보면
  // index.js에서 다른 store를 다시 넣어주는 경우는 없음
  // 결과적으로 1번만 실행

  return state;
}
import React, { createContext, useContext, useReducer } from 'react';
import Reducer from './Reducer';

const StateContext = createContext({});
const DispatchContext = createContext(Reducer);

export const Store = ({ children, initialState }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default function useStore() {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  return { state, dispatch };
}

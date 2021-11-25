import { createContext, useContext, useReducer, useEffect } from 'react';

import CalculateReducer from '../reducers/CalculateReducer';

const initialState ={
    calculate: CalculateReducer()
};
const MainReducer = (state, action) => ({
    calculate: CalculateReducer(state.calculate, action)
});

export const ContextPrimary = createContext();

const localState = JSON.parse(localStorage.getItem('calculate'));

export const StateProvider =({ children }) => {
    const [state, dispatch] = useReducer(MainReducer, localState || initialState);

    useEffect(()=>{
        localStorage.setItem('calculate', JSON.stringify(state));
    }, [state]);

    return (
        <ContextPrimary.Provider value={[state, dispatch]}>
            {children}
        </ContextPrimary.Provider>
    );
};
export const useStateValue = () => useContext(ContextPrimary);
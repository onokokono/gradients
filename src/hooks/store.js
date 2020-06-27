import { useEffect, useState } from 'react';

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = () => {
    const setStore = useState(global)[1];

    const dispatch = (actionType, payload) => {
        const newState = actions[actionType](globalState, payload);
        globalState = { ...globalState, ...newState };

        for (let listener of listeners)
            listener(globalState);
    };

    useEffect(() => {
        listeners.push(setStore);

        return (() => {
            listeners.filter(listener => listener !== setStore);
        });

    }, [setStore]);

    return [globalState, dispatch];
};

export const initStore = (userActions, initialStore) => {
    globalState = { ...globalState, ...initialStore };
    actions = { ...actions, ...userActions };
}

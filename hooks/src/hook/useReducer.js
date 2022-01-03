import { useReducer } from 'react';

function reducer (state, action) {
    switch(action.type) {
        case 'increment':
            return state + 1;
        break;
        case 'decrement':
            return state - 1;
        break; 
        default: 
            return state;   
    }

}

export const ReducerComponent = () => {
    const [count, dispatcher] = useReducer(reducer, 0);

    return (
        <div>
            <h1>Use Reducer</h1>
            count: {count}
            <button onClick={() => dispatcher({ type: 'increment'})}>Increment</button>
            <button onClick={() => dispatcher({ type: 'decrement'})}>Decrement</button>
        </div>
    )
}
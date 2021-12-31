import React, { useState } from 'react';

export const StateComponent = () => {
    const [count, setCount] = useState(3);
    return (
        <div>
            <h1>Use State</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}
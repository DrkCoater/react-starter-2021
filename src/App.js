import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementBy, decrementBy } from './redux/counter';

export default function App() {
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div className="App">
            <h1> The count is: {count}</h1>
            <button onClick={() => dispatch(increment())}>increment1</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <button onClick={() => dispatch(incrementBy(33))}>Increment by 33</button>
            <button onClick={() => dispatch(decrementBy(33))}>Decrement by 33</button>
        </div>
    );
}

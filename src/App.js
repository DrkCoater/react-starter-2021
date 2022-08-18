import React from 'react';
import ImgSrc from './assets/images/test-image.jpg';

export default function App() {
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Welcome to React App</h1>
            <h3>Date : {new Date().toDateString()}</h3>
        </div>
    );
}

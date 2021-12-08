import React from 'react';
import ImgSrc from './assets/images/test-image.jpg';

function App() {
    return (
        <div>
            <img src={ImgSrc} alt="girl" />
            <h3>Date : {new Date().toDateString()}</h3>
        </div>
    );
}

export default App;

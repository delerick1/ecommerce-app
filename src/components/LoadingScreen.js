import React from 'react';
import "../styles/loading1.css"

const LoadingScreen = () => {
    return (
        <div  className="overlay">


            <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default LoadingScreen;
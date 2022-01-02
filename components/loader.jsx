import React from 'react';

export const Loader = () => {
    return (
        <div>
            {/* Loading... */}
            <img src={require("../img/sunny-light.svg").default} alt="loader" />
        </div>
    )
}

import React from 'react';
import useSwiper from "../helper/useSwiper"

const MyComponent = () => {
    const [data] = useSwiper();
    return (
        <div>
            404 Not Found {data}
        </div>
    );
};

export default MyComponent;

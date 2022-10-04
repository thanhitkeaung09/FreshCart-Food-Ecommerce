import React from 'react';
import {BsFillCaretLeftFill} from "react-icons/bs"
import {BsFillCaretRightFill} from "react-icons/bs"
import FeatureOne from "./FeatureOne";
import FeatureProducts from "./FeatureProducts";

const MyComponent = () => {
    return (
        <div className="w-[90%] lg:w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[60%] mx-auto " >
            <FeatureOne/>
            <FeatureProducts/>
        </div>
    );
};

export default MyComponent;

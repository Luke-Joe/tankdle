import React from 'react';
import { Link } from 'react-router-dom';

export default function NavButton({ to, text1, text2, imgSrc, highlightColour }) {
    return (
        // Code for swipe animation retrieved from: https://www.creative-tim.com/twcomponents/component/button-hover-effects
        <Link to={to} className={`group mt-4 w-full h-36 bg-gray-800 text-white text-center duration-200 max-w-sm bg-opacity-50 border-double border-4 border-${highlightColour} relative px-3 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-${highlightColour} before:transition-all before:duration-150 hover:text-white hover:shadow-${highlightColour} hover:before:left-0 hover:before:w-full opacity-90`}>
            <div className="flex items-center justify-start h-full p-4">
                <img src={imgSrc} alt="" className="w-32 h-28 object-cover z-10" />
                <div className="flex flex-col justify-start text-left z-10 ">
                    <span className={`font-bold text-2xl text-${highlightColour} mb-2 z-10 group-hover:text-white`}>{text1}</span>
                    <span className="font-medium text-large text-white opacity-50 z-10">{text2}</span>
                </div>
            </div>
        </Link >
    )
}
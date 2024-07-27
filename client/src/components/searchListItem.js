import React, { forwardRef } from 'react';

function SearchListItem({ tank, isSelected, onClick }, ref) {
    return (
        <li
            ref={ref}
            tabIndex='0'
            onClick={onClick}
            className={`inline-flex items-center w-full px-4 py-2 text-sm flex-grow
            ${isSelected ? 
                'bg-gray-100 dark:bg-gray-600 dark:text-white' 
                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'}`}
        >
            <img 
                src={tank.images.big_icon} 
                alt={tank.name}
                className="object-cover rounded h-full mr-2 w-1/5"
            />
            <span 
                className="w-4/5 text-left"
            >{tank.name}
            </span>
        </li>
    );
}

export default forwardRef(SearchListItem);
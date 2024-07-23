import React, { forwardRef } from 'react';

function SearchListItem({ tank, isSelected, onClick }, ref) {
    return (
        <li
            ref={ref}
            tabIndex='0'
            onClick={onClick}
        >
            {tank.name}
        </li>
    );
}

export default forwardRef(SearchListItem);
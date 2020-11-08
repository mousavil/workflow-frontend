import React from 'react';

export default function Body(props) {
    return (
        <div className="flex flex-col w-10/12 h-auto mt-8 py-8 border-orange-500 border-4 mx-auto">
            {props.children}
        </div>
    );
}
import React from 'react';

export default function Aside(props){
    return(
        <aside className="flex flex-col w-2/12 mt-8 py-8 box-content border-orange-200 border-2 h-64 overflow-auto">
            {props.children}
        </aside>
    );
}
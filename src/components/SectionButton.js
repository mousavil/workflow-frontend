import React from 'react';

export default function SectionButton(props) {
    const { setSection } = props;
    return (
        <div className="flex flex-row justify-between border-red-600 border-2 mx-auto h-12 w-32">
            <button
                className="w-20 h-8 rounded-full border-teal-400 hover:border-blue-900 border-2 my-auto focus:outline-none"
                onClick={() => setSection('structure')}
            >structure</button>

            <button
                className="w-20 h-8 rounded-full border-teal-400 hover:border-blue-900 border-2 my-auto focus:outline-none"
                onClick={() => setSection('main')}
            >main</button>
        </div>
    )
}

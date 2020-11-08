import React from 'react';

export default function RuleSelectorButton({ setType }) {
    return (
        <div className="border-4 mt-8 border-gray-500 w-11/12 h-16 flex flex-row mx-auto justify-around">
            <button
                type="button"
                onClick={() => setType('wfTime')}
                className="my-auto border-blue-400 hover:bg-pink-100 border-2 h-12 w-1/5"
            >حداکثر مدت زمان گردش کار</button>
            <button
                type="button"
                onClick={() => setType('stepsFasele')}
                className="my-auto border-blue-400 hover:bg-pink-100 border-2 h-12 w-1/5"
            >گذاشتن حداکثر فاصله بین گام ها</button>
            <button
                type="button"
                onClick={() => setType('stepTime')}
                className="my-auto border-blue-400 hover:bg-pink-100 border-2 h-12 w-1/5"
            >گذاشتن مدت زمان مشخص برای یک گام</button>

        </div>
    )
}
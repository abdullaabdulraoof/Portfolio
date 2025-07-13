import React from 'react'

const Technologies = (props) => {
    return (
        <div className="text-center">
            <div className="border border-gray-700 dark:border-gray-500 w-[100px] h-[100px] p-4 bg-[#e5e7eb] dark:bg-[#020817] flex items-center justify-center rounded-md shadow-md hover:shadow-[0_0_15px_#00ffbf40] transition-shadow duration-300 mx-auto mb-2">
                <img
                    className="w-[40px] transition-transform duration-300 hover:scale-125 dark:invert"
                    src={props.src}
                    alt={props.title}
                />
            </div>
            <p className="text-sm text-gray-700 dark:text-[#94a3b8]">{props.title}</p>
        </div>
    )
}

export default Technologies

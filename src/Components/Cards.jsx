import React from 'react'

const Cards = (props) => {
    return (
        <div className="flex flex-col rounded-lg group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 px-6 py-[18px] gap-[16px]
                border border-[#cacaca] dark:border-[#2a2c31] shadow-md hover:shadow-[0_10px_25px_-5px_#00ffbf40] w-full sm:w-[445px] bg-white dark:bg-[#0b0f19] text-black dark:text-white">
            <div className='flex gap-5 justify-between items-center'>

                <div>
                    <h3 className='text-xl font-bold text-black dark:text-white'> {props.title}</h3>
                </div>
                <div className='flex gap-2 justify-center items-center'>
                    <button className='flex justify-center items-center'>
                        <a href="https://github.com/Regnum007/Infosys-Python-Batch-3-Garden-Go" target='_blank' rel="noopener noreferrer">
                            <lord-icon

                                src="https://cdn.lordicon.com/ioihllwu.json"
                                trigger="hover"
                                style={{ "width": "30px", "height": "30px" }}
                                colors="primary:#020817,secondary:#ffffff"
                                className="dark:invert">
                            </lord-icon>
                        </a>
                    </button>
                    <button className='flex justify-center items-center'>
                        <lord-icon
                            src="https://cdn.lordicon.com/hmqxevgf.json"
                            trigger="hover"
                            stroke="bold"
                            colors="primary:#020817,secondary:#00000"
                            style={{ width: "25px", height: "25px" }}
                            className="dark:invert"
                        />
                    </button>
                </div>

            </div>
            <div className='flex flex-col gap-5'>
                <p className='text-gray-600 dark:text-[#94a3b8] text-lg font-light mt-4'>{props.desc}</p>
                <div className='flex flex-wrap gap-2'>
                    {props.tech.map((item, index) => (
                        <div
                            key={index}
                            className='flex justify-center items-center bg-gray-200 dark:bg-[#101728] px-3 py-1 text-xs font-bold rounded-full text-black dark:text-white'
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cards

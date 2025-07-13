import Technologies from "./Technologies"

const Technologies1 = () => {
    return (
        <section className='min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-4 bg-gray-100 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-[#0d1117] dark:via-[#0a0e14] dark:to-[#020817] py-16 transition-colors duration-300'>
            <div className="w-1/2">
                <h3 className='text-3xl sm:text-4xl font-bold mb-8 text-center text-black dark:text-white'>Technologies</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 p-6 justify-items-center">
                    <Technologies src="src/assets/mongodb.svg" title="MongoDB" />
                    <Technologies src="src/assets/express1.svg" title="Express js" />
                    <Technologies src="src/assets/React.svg" title="React" />
                    <Technologies src="src/assets/nodejs.svg" title="Node js" />
                </div>
            </div>
        </section>
    )
}

export default Technologies1

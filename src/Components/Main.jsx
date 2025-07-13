import Cards from './Cards'
import Technologies from './Technologies'

const Main = () => {
    return (
        <main>
            {/* Hero Section */}
            <section className='min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-4 bg-white text-black dark:bg-[#020817] dark:text-white transition-colors duration-300'>
                <div className='max-w-4xl mx-auto text-center'>
                    <h1 className='text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 dark:text-white text-black'>
                        Abdulla
                        <span className='bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent dark:from-white dark:to-gray-400'>
                            {' '}Abdul Raoof
                        </span>
                    </h1>
                    <h2 className='text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-[#94a3b8] mb-8'>Full Stack Developer</h2>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                        <button className='flex justify-center items-center gap-3 p-[10px] px-8 bg-[#020817] text-white dark:text-black rounded-md font-semibold dark:hover:bg-[#bebebe] dark:bg-white hover:bg-[#2f3030]'>
                            <span className='text-sm font-medium'>View My Work</span>
                            <lord-icon
                                className="dark:invert"
                                src="https://cdn.lordicon.com/gqfozvrp.json"
                                trigger="hover"
                                colors="primary:#ffffff,secondary:#ffffff"
                                style={{ "width": "20px", "height": "20px" }}>
                            </lord-icon>
                        </button>
                        <button className='flex justify-center items-center gap-3 p-[10px] px-8 border border-gray-700 text-black dark:text-white rounded-md font-semibold bg-white dark:bg-[#020817] dark:hover:bg-[#181d2a] hover:bg-[#dcdbdb] dark:border-gray-300'>
                            <lord-icon className="dark:invert"
                                src="https://cdn.lordicon.com/bimokqfw.json"
                                trigger="hover"
                              
                                style={{ "width": "25px", "height": "25px" }}>
                            </lord-icon>
                            <span className='text-sm font-medium'>Get In Touch</span>
                        </button>
                    </div>

                    {/* Icons */}
                    <div className='flex justify-center items-center gap-4 mt-8'>
                        <a href='https://github.com/abdullaabdulraoof' target='_blank'>
                            <lord-icon

                                src="https://cdn.lordicon.com/ioihllwu.json"
                                trigger="hover"
                                style={{ "width": "30px", "height": "30px" }}
                                colors="primary:#020817,secondary:#ffffff"
                                className="dark:invert">
                            </lord-icon>
                        </a>
                        <a href='https://www.linkedin.com/in/abdullaabdulraoof/' target='_blank'>
                            <lord-icon
                                src="https://cdn.lordicon.com/nwqudhei.json"
                                trigger="hover"
                                colors="primary:none,secondary:#ffffff"
                                style={{ "width": "38px", "height": "38px" }}
                                className="dark:invert">
                            </lord-icon>
                        </a>
                        <a href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRrlQspPCnZzqkXLfXkFxHcWpCKsNnWJdwSbcLfgMxzVJbRVzXHqKBvbtVZFtZCNGwLFzZb' target='_blank'>
                            <lord-icon
                                src="https://cdn.lordicon.com/ozlkyfxg.json"
                                trigger="hover"
                                stroke="bold"
                                colors="primary:#ffffff,secondary:#020817"
                                style={{ "width": "36px", "height": "36px" }}
                                className="dark:invert">
                            </lord-icon>
                        </a>
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
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

            {/* Projects Section */}
            <section className='min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-4 bg-white text-black dark:bg-[#020817] dark:text-white py-24 transition-colors duration-300'>
                <div className='max-w-4xl mx-auto text-center mt-10 lg:mt-0 mb-[60px]'>
                    <h1 className='text-3xl sm:text-4xl font-bold mb-4 text-black dark:text-white'>Featured Projects</h1>
                </div>

                <div className="flex justify-center items-center flex-wrap gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Cards title="E-Commerce Platform" desc="Full-stack solution with React, Node.js, and Stripe integration for seamless online shopping experience." tech={["React", "Node.js", "MongoDB", "Stripe"]} />
                    <Cards title="E-Commerce Platform" desc="Full-stack solution with React, Node.js, and Stripe integration for seamless online shopping experience." tech={["react"]} />
                    <Cards title="E-Commerce Platform" desc="Full-stack solution with React, Node.js, and Stripe integration for seamless online shopping experience." tech={["react"]} />
                    <Cards title="E-Commerce Platform" desc="Full-stack solution with React, Node.js, and Stripe integration for seamless online shopping experience." tech={["react"]} />
                </div>
            </section>
        </main>
    )
}

export default Main;

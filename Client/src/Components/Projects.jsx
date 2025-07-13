import Cards from './Components/Cards'

const projects = () => {
  return (
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
  )
}

export default projects

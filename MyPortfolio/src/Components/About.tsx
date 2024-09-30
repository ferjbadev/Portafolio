import React from 'react'

const About = () => {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white hover:scale-110">
                        Hi, I'm Fernando Barrera
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Software developer with experience in React using JavaScript/TypeScript, passionate about creating modern and efficient user interfaces,
                        my focus is on building dynamic and scalable web applications using tools like TailwindCSS and DaisyUI to ensure an attractive and responsive design,
                        i have experience working with databases like MongoDB, PostgreSQL and FireBase, which allows me to implement complete end-to-end solutions
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg hover:scale-110">
                            Contact
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg hover:scale-110">
                            Check out my previous work
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
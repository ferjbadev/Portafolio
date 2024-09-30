import React from 'react'

const Narbar = () => {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="font-medium text-white md:mb-0 hover:text-lg hover:scale-110">
                    <a href="#about" className="ml-8 text-2xl">
                        My Portfolio
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
                    <a href="#projects" className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 hover:text-white hover:scale-110">
                        My Previous Work
                    </a>
                    <a href="#skills" className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 hover:text-white hover:scale-110">
                        Skill
                    </a>

                </nav>
                <a
                    href="#contact"
                    className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 hover:text-white hover:scale-110">
                    Thank you for viewing my portfolio!!
                </a>
            </div>
        </header>
    )
}
export default Narbar
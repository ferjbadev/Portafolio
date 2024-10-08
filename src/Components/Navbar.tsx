import React from 'react'

const Navbar = () => {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex p-5">
                <a className="font-medium text-white hover:scale-110 md:ml-40 ">
                    {/* Boton de porfolio */}
                    <a href="#about" className="ml-8 text-2xl">
                        My Portfolio
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-30 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-end">
                    <a href="#projects" className="md:mr-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 hover:text-white hover:scale-110">
                        {/* Boton de previos */}
                        My Previous Work
                    </a>
                    <a href="#skills" className="md:mr-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 hover:text-white hover:scale-110">
                        {/* Boton de skills */}
                        Skills
                    </a>
                </nav>
                <a
                    href="#contact"
                    className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 hover:text-white hover:scale-110">
                    {/* Agradecimiento */}
                    Thank you for viewing my portfolio!!
                </a>
            </div>
        </header>

    )
}
export default Navbar
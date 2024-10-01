import React from 'react'
import imagen from "../assets/imagen1.jpg"

const About = () => {
    return (
        <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                {/* Texto */}
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium hover:scale-110 transition duration-300 ease-in-out">
                        {/* Mi nombre */}
                        Hi, I'm Fernando Barrera
                    </h1>
                    <p className="mb-8 leading-relaxed text-lg">
                        {/* Div de informacion sobre mi */}
                        Software developer with experience in React using JavaScript/TypeScript, passionate about creating modern and efficient user interfaces and focus on building dynamic and scalable web applications using
                        popular tools like TailwindCSS and DaisyUI.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            // Boton de contacto
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg hover:scale-110 transition duration-300 ease-in-out">
                            Contact
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg hover:scale-110 transition duration-300 ease-in-out">
                            {/* Botón para ver proyectos anteriores */}
                            Check out my previous work
                        </a>
                    </div>
                </div>
                {/* Imagen */}
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 shadow-lg rounded-lg overflow-hidden">
                    <img className="object-cover object-center w-full h-full" alt="Perfil" src={imagen} />
                </div>
            </div>
        </section>

    );
}

export default About;
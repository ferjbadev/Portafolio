import React, { useState, useEffect } from "react";


interface Repo {
    // Definición de la interfaz Repo para tipar los datos de los repositorios.
    id: number;
    name: string;
    description: string | null;
    language: string | null;
    html_url: string;
}

const Projects = () => {
    // Estado para almacenar los repositorios
    const [repos, setRepos] = useState<Repo[]>([]);

    // Mi usuario de Github
    const githubUsername = "ferjbadev"; // Reemplaza con tu usuario de GitHub

    // Función para obtener los repositorios del GitHub cuando se monta el componente
    useEffect(() => {
        fetch(`https://api.github.com/users/${githubUsername}/repos`) // URL de la API de GitHub
            .then((response) => response.json())
            .then((data) => {
                setRepos(data); // Almacena los repositorios en el estado
            })
            .catch((error) => console.error("Error fetching repos:", error)); // Catch para atrapar errores
    }, []);

    return (
        // Sección principal que contiene el título y la lista de repositorios
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                {/* Contenedor principal */}
                <div className="flex flex-col w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        My Projects on GitHub
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Here are some of my projects on GitHub
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {/* Itera sobre los repositorios obtenidos de la API */}
                    {repos.map((repo) => (
                        <a
                            href={repo.html_url}
                            key={repo.id}
                            className="sm:w-1/2 w-full p-4"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="flex relative">
                                <div className="p-6 relative z-10 w-full border border-gray-800 bg-gray-900 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300 ease-in-out">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                        {repo.language ? repo.language : "Unspecified"}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {repo.name}
                                    </h1>
                                    <p className="leading-relaxed">
                                        {repo.description ? repo.description : "There is no description"}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

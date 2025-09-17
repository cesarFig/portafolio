import { useState, useEffect } from 'react';
import tailsUpImg from '../assets/images/tailsUpImg.png';
import nayaImg from '../assets/images/naya.png';
import syncTeam from '../assets/images/syncTeam.png';

export default function Projects() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const projects = [
        {
            title: "Nayá",
            description: "Nayá es una aplicación móvil galardonada con el premio Innovatec Local, diseñada para brindar apoyo psicológico a niños.",
            image: nayaImg,
            delay: 0
        },
        {
            title: "SyncTeam",
            description: "Sistema de gestion de tareas basada en tickets para el mejoramiento de los procesos de una empresa de marketing.",
            image: syncTeam,
            delay: 150
        },
        {
            title: "TailsUp!",
            description: "TailsUp! es una página web moderna y completamente responsiva para una tienda de mascotas. Diseñada con HTML, CSS y JavaScript puros.",
            image: tailsUpImg,
            delay: 300
        }
    ];

    return (
        <div 
            id='proyectos' 
            className="bg-black opacity-90 w-9/12 max-w-7xl rounded-2xl py-8 px-4 sm:px-6 lg:px-8 border"
        >
            <div className={`text-center mb-8 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-[#32C6AE] mb-2"
                    style={{ fontFamily: 'Soloist' }}>
                    Proyectos
                </h2>
                <p className="text-gray-400 text-sm md:text-base"
                   style={{ fontFamily: 'Soloist' }}
                >
                    Algunos proyectos en los que he trabajado
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-30">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className={`flex items-center flex-col gap-3 transform transition-all duration-1000 ${isLoaded
                                ? 'translate-y-0 opacity-100 scale-100'
                                : 'translate-y-20 opacity-0 scale-95'
                            }`}
                        style={{
                            transitionDelay: isLoaded ? `${project.delay}ms` : "0ms"
                        }}
                    >
                        <div className="relative group w-full max-w-sm p-4">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-64 sm:h-72 md:h-80 lg:h-85 object-contain rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300 border-[2px] mx-auto"
                                style={{
                                    boxShadow: `0 0 8px #32C6AE, 0 0 15px #32C6AE55, 0 0 20px #32C6AE33`,
                                }}
                            />

                            <div className="absolute inset-0 bg-[#161F2E] bg-opacity-80 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-center text-white">
                                    <h3 className="text-lg sm:text-xl mb-2 text-[#32C6AE]" style={{ fontFamily: 'Soloist' }}>
                                        {project.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <h1 className='text-white text-xl sm:text-2xl text-center' style={{ fontFamily: 'Soloist' }}>
                            {project.title}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    );
}
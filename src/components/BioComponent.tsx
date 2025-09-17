import { useState, useEffect } from 'react';
import cesarFigueroaImg from '../assets/images/cesarfigueroa.jpg';

export default function BioComponent() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div 
            className="bg-black opacity-90 flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-20 p-4 sm:p-6 md:p-8 lg:p-12 w-11/12 sm:w-10/12 lg:w-9/12 max-w-7xl rounded-2xl mt-8 sm:mt-20 lg:mt-20 mx-auto"
        >            
            <div className={`flex-shrink-0 transition-all duration-700 sm:mt-10 md: ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}>
                <img
                    src={cesarFigueroaImg}
                    alt="César Figueroa Merino"
                    className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 md: mt-10 lg:h-72 xl:w-84 xl:h-84 rounded-full object-cover shadow-2xl hover:scale-105 transition-transform duration-300"
                    style={{
                        border: '3px solid #32C6AE',
                        boxShadow: `
                            0 0 15px #32C6AE,
                            0 0 30px #32C6AE,
                            0 0 45px #32C6AE55,
                            0 8px 32px rgba(0, 0, 0, 0.3)
                        `,
                    }}
                />
            </div>                        
            <div className="w-full max-w-2xl text-center lg:text-left px-2 sm:px-4">
                <h1 
                    className={`text-[#32C6AE] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 transition-all duration-700 ${
                        isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                    }`}
                    style={{ 
                        fontFamily: 'Death Star',
                        transitionDelay: isLoaded ? '200ms' : '0ms'
                    }}
                >
                    ¡Hola!
                </h1>                
                <p 
                    className={`text-white text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 transition-all duration-700 ${
                        isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                    }`}
                    style={{ 
                        fontFamily: 'Soloist',
                        transitionDelay: isLoaded ? '400ms' : '0ms'
                    }}
                >
                    Soy <span className="text-[#32C6AE] font-semibold">César Figueroa Merino</span>, desarrollador de software. Mi pasión es dar vida a ideas innovadoras, creando soluciones que no solo funcionan, sino que también resuelven problemas de manera eficiente. Siempre estoy en constante aprendizaje, explorando nuevas tecnologías para enfrentar cualquier desafío.
                </p>                
                <p 
                    className={`text-white text-sm sm:text-base md:text-lg leading-relaxed italic text-center lg:text-left transition-all duration-700 ${
                        isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                    }`}
                    style={{ 
                        fontFamily: 'Soloist',
                        transitionDelay: isLoaded ? '600ms' : '0ms',                        
                    }}
                >
                    "El valor comienza confiando en uno mismo"
                </p>
            </div>
        </div>
    );
}
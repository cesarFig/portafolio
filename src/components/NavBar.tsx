import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; 
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    closeMenu(); 
  };

  return (
    <nav className="fixed z-50 w-full bg-[#161F2E] text-xl py-3 shadow-2xl">
      <div className="container mx-auto flex items-center justify-between px-4">
        
        <div className="text-2xl text-white flex-shrink-0"
          style={{ fontFamily: 'Death Star' }}>
          CesarFig117
        </div>        
        <ul className="hidden md:flex space-x-8">
          <li className="relative group">
            <button 
              onClick={() => scrollToSection('proyectos')} 
              className="text-white hover:text-[#32C6AE] transition-colors duration-300 py-2 block cursor-pointer" 
              style={{ fontFamily: 'Soloist' }}
            >
              Proyectos
            </button>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#32C6AE] transition-all duration-300 group-hover:w-full rounded-3xl"></div>
          </li>
          <li className="relative group">
            <button 
              onClick={() => scrollToSection('educacion')} 
              className="text-white hover:text-[#32C6AE] transition-colors duration-300 py-2 block cursor-pointer" 
              style={{ fontFamily: 'Soloist' }}
            >
              Educacion
            </button>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#32C6AE] transition-all duration-300 group-hover:w-full rounded-3xl"></div>
          </li>
          <li className="relative group">
            <button 
              onClick={() => scrollToSection('contacto')} 
              className="text-white hover:text-[#32C6AE] transition-colors duration-300 py-2 block cursor-pointer" 
              style={{ fontFamily: 'Soloist' }}
            >
              Contacto
            </button>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#32C6AE] transition-all duration-300 group-hover:w-full rounded-3xl"></div>
          </li>
        </ul>        
        <button 
          className="md:hidden text-white hover:text-[#32C6AE] transition-colors duration-300 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-6 h-0.5 bg-current transition-all duration-200 ${isOpen ? 'rotate-45 translate-y-1.5' : 'mb-1'}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-opacity duration-200 ${isOpen ? 'opacity-0' : 'mb-1'}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-all duration-200 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>      
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="bg-[#1a2332] px-4 py-4 space-y-2">
          <li>
            <button 
              onClick={() => scrollToSection('proyectos')}
              className="block w-full text-left text-white hover:text-[#32C6AE] transition-colors duration-300 py-3 px-2 rounded-lg hover:bg-[#2a3441]"
              style={{ fontFamily: 'Soloist' }}
            >
              Proyectos
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('educacion')}
              className="block w-full text-left text-white hover:text-[#32C6AE] transition-colors duration-300 py-3 px-2 rounded-lg hover:bg-[#2a3441]"
              style={{ fontFamily: 'Soloist' }}
            >
              Educacion
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-left text-white hover:text-[#32C6AE] transition-colors duration-300 py-3 px-2 rounded-lg hover:bg-[#2a3441]"
              style={{ fontFamily: 'Soloist' }}
            >
              Contacto
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
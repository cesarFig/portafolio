import { useEffect, useState, useRef } from "react";

type EducationItem = {
  degree: string;
  institution: string;
  year: string;
};

const educationData: EducationItem[] = [
  { degree: "Ingeniería en Sistemas Computacionales", institution: "Instituto tecnologico de Morelia", year: "2023 - ACTUALMENTE" },
  { degree: "Ingles B2", institution: "Instituto tecnologico de Morelia", year: "2023 - 2025" },
];

export default function Education() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {            
            setVisible(true);
          } else {            
            setVisible(false);
          }
        });
      },
      {
        threshold: 0.3, 
        rootMargin: "-50px 0px" 
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      id="educacion" 
      className="bg-black opacity-90 w-11/12 sm:w-10/12 lg:w-9/12 max-w-6xl mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border rounded-2xl"
    >
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl text-[#32C6AE] mb-6 sm:mb-8 text-center transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
        style={{ fontFamily: "Soloist" }}
      >
        Educación
      </h2>
      
      <div className="flex flex-col gap-4 sm:gap-6">
        {educationData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 sm:p-4 rounded-xl transition-all duration-700 relative
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
            style={{
              transitionDelay: visible ? `${index * 200}ms` : "0ms" 
            }}
          >            
            <div className="flex flex-col text-left text-white w-full sm:w-7/12 lg:w-8/12">
              <h3 
                className="text-lg sm:text-xl lg:text-2xl mb-1" 
                style={{ fontFamily: "Soloist" }}
              >
                {item.degree}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-0">
                {item.institution}
              </p>
            </div>                        
            <div className="text-left sm:text-right text-[#32C6AE] font-bold text-sm sm:text-base lg:text-lg xl:text-xl mt-2 sm:mt-0 sm:ml-4 w-full sm:w-5/12 lg:w-4/12">
              {item.year}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
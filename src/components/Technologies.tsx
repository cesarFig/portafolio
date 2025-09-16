import React, { useState, useEffect, useRef } from "react";
import {
    SiReact,
    SiTailwindcss,
    SiNodedotjs,
    SiPostgresql,
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiGit,
    SiDocker,
    SiPython,
    SiFastapi,
    SiJira,
    SiPhp,
    SiMysql,
    SiGithub,
    SiPostman,
    SiFigma
} from "react-icons/si";

type Tech = {
    name: string;
    icon: React.ElementType;
    color: string;
};

const technologies: Tech[] = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    { name: "React Native", icon: SiReact, color: "#61DAFB" },
    { name: "Jira", icon: SiJira, color: "#0052CC" },
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Next.js", icon: SiReact, color: "#61DAFB" },
    { name: "GitHub", icon: SiGithub, color: "#ffffff" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];
export default function Technologies() {
    const [hovered, setHovered] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {                        
                        setIsVisible(true);
                    } else {                        
                        setIsVisible(false);
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
            className="bg-black opacity-90 w-9/12 p-6 rounded-2xl mb-20"
        >
            <p 
                className={` text-3xl md:text-4xl mb-6 text-center font-bold text-[#32C6AE] transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ fontFamily: 'Soloist' }}
            >
                Tecnologías
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {technologies.map(({ name, icon: Icon, color }) => {
                    const isHovered = hovered === name;

                    return (
                        <div
                            key={name}
                            className={`flex flex-col items-center gap-2 cursor-pointer p-4 rounded-xl border transition-all duration-700 ${
                                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-90'
                            }`}
                            style={{
                                borderColor: isHovered ? color : "#32C6AE",
                                boxShadow: isHovered
                                    ? `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`
                                    : `0 0 8px #32C6AE55`,                                
                            }}
                            onMouseEnter={() => setHovered(name)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <Icon
                                size={60}
                                style={{
                                    color: isHovered ? color : "#32C6AE",
                                    transition: "all 0.4s ease",
                                    opacity: isHovered ? 1 : 0.8,
                                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                                }}
                            />
                            <span
                                style={{
                                    color: isHovered ? color : "#32C6AE",
                                    transition: "all 0.4s ease",
                                    opacity: isHovered ? 1 : 0.8,
                                    transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                                }}
                                className="text-sm font-medium"
                            >
                                {name}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
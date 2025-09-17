import React, { useState, useEffect } from "react";
import { 
  SiTiktok,
  SiFacebook,
  SiGithub,
  SiGmail,
  SiX
} from "react-icons/si";

type Social = {
  name: string;
  icon: React.ElementType;
  url: string;
  color?: string;
};

const socials: Social[] = [
  { name: "TikTok", icon: SiTiktok, url: "https://www.tiktok.com/@master_chief4", color: "#69C9D0" },
  { name: "Facebook", icon: SiFacebook, url: "https://www.facebook.com/share/19MwYUDUwk/", color: "#1877F2" },
  { name: "X", icon: SiX, url: "https://x.com/csarFig_soy", color: "#1DA1F2" },
  { name: "GitHub", icon: SiGithub, url: "https://github.com/cesarFig", color: "#fff" },
  { name: "Email", icon: SiGmail, url: "mailto:cesarFig117@gmail.com", color: "#D44638" },
];

export default function Contact() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div 
      id="contacto" 
      className="bg-black opacity-90 w-11/12 sm:w-10/12 lg:w-9/12 max-w-4xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8 rounded-2xl"
    >      
      <div className={`flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 transition-opacity duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}>
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 rounded-xl"
            >
              <Icon 
                size={window.innerWidth < 640 ? 40 : window.innerWidth < 1024 ? 50 : 55}
                className="transition-transform duration-200 hover:scale-110"
                style={{
                  color: social.color || "#32C6AE"
                }}
              />
            </a>
          );
        })}
      </div>
      
      <p
        className={`text-gray-400 text-xs sm:text-sm text-center mt-8 sm:mt-12 italic transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          fontFamily: "Soloist"
        }}
      >
        "Siempre dispuesto a colaborar en nuevos proyectos"
      </p>
    </div>
  );
}
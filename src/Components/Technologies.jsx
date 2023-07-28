import { Icon } from "@iconify/react";
import Ticker from "framer-motion-ticker";

const images = [
  { text: "HTML/CSS | ‎ ", icon: "simple-icons:html5" },
  { text: "JavaScript | ‎ ", icon: "fa-brands:js" },
  { text: "React | ‎ ", icon: "fa-brands:react" },
  { text: "Redux | ‎ ", icon: "tabler:brand-redux" },
  { text: "Tailwind CSS | ‎ ", icon: "simple-icons:tailwindcss" },
  { text: "Three.js | ‎ ", icon: "tabler:brand-threejs" },
  { text: "Framer Motion | ‎ ", icon: "ph:framer-logo" },
  { text: "Git and GitHub | ‎ ", icon: "fa-brands:github" },
  { text: "Front-End Build Tools | ‎ ", icon: "fa-solid:tools" },
  { text: "Responsive Design | ‎ ", icon: "fluent:desktop-20-regular" },
  { text: "RESTful APIs | ‎ ", icon: "fa-solid:exchange-alt" },
];
const Technologies = () => {
  return (
    <div className="bg-[#1a1a1a] h-60">
      <h1 className="text-center text-3xl py-8 mb-7 uppercase">
        Technologies I use
      </h1>
      <Ticker duration={30} className="items-center justify-center">
        {images.map((item, index) => (
          <div key={index} className="flex gap-2 items-center">
            <Icon icon={item.icon} className="text-3xl" />
            <h1 className="bg-gradient-to-r to-[#525252] from-[#f0f0f0] bg-clip-text text-transparent text-4xl text-center">
              {item.text}
            </h1>
          </div>
        ))}
      </Ticker>
    </div>
  );
};

export default Technologies;

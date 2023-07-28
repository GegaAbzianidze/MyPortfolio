import ProjectsCard from "./ProjectsCard";

const projects = [
  {
    title: "PodHub",
    description:
      "PodHub is a podcast app that allows you to listen to your favorite podcasts.It uses podcastIndex API to fetch podcasts and episodes.",
    image:
      "https://i.imgur.com/GThqxd4.png",
    link: "https://podhubweb.vercel.app/",
    githubLink: "https://github.com/GegaAbzianidze/Podhub",
    tecnologies: ["ReactJS", "Redux", "Tailwind CSS"]
  },
  {
    title: "Articl0",
    description: "Articlo is a blog app that allows you to read and write articles.It uses Supabase as a backend.",
    image:
      "https://i.imgur.com/9O29Yv1.png",
    link: "https://articl0.vercel.app/",
    githubLink: "https://github.com/GegaAbzianidze/Articl0",
    tecnologies: ["ReactJS", "Supabase", "Tailwind CSS", ]
  },
  {
    title: "Zappos",
    description: "Zappos is a shoe e-commerce app that allows you to buy shoes.It uses Commerce.js as a backend.",
    image:
      "https://cdn.dribbble.com/userupload/4925719/file/original-93bff3b1e43427e5b34f58bc2bc4b7de.png?resize=1600x1200",
    link: "https://zappos-ecommerce.vercel.app/",
    githubLink: "https://github.com/GegaAbzianidze/Zappos-Ecommerce",
    tecnologies: ["ReactJS", "Commerce.js", "Tailwind CSS"]
  },
  {
    title: "3D Weather",
    description: "3D Weather is a weather app that allows you to see weather in 3D.It uses OpenWeatherMap API to fetch weather data.",
    image:
      "https://cdn.dribbble.com/userupload/4925719/file/original-93bff3b1e43427e5b34f58bc2bc4b7de.png?resize=1600x1200",
    link: "Blank",
    githubLink: "Blank",
    tecnologies: ["ReactJS", "Three.js", "Tailwind CSS"]
  },
];

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="text-center text-3xl py-8 mb-7 uppercase">
        Projects I&apos;ve worked on
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#1a1a1a] rounded-lg p-5">
            <ProjectsCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

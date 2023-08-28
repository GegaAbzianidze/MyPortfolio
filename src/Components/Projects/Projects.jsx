import ProjectsCard from "./ProjectsCard";
import Pandco from "/P&CO.png";
import Podhub from "/Podhub.png";
import Articl0 from "/Articl0.png";
import SnakeGameWithController from "/SnakeGameWithController.png";

const projects = [
  {
    title: "PodHub",
    description:
      "PodHub is a podcast app that allows you to listen to your favorite podcasts.It uses podcastIndex API to fetch podcasts and episodes.",
    image: Podhub,
    link: "https://pod-hub.vercel.app/",
    githubLink: "https://github.com/GegaAbzianidze/PodHub",
    technologies: ["ReactJS", "Redux", "Tailwind CSS"],
  },
  {
    title: "P&CO",
    description:
      "P&CO is a ecommerce app that allows you to buy clothes.It uses Commerce.js as a backend.",
    image: Pandco,
    link: "https://pandco-ecommerce.vercel.app/",
    githubLink: "https://github.com/GegaAbzianidze/P-CO--Ecommerce",
    technologies: ["ReactJS", "Commerce.js", "Tailwind CSS"],
  },
  {
    title: "Articl0",
    description:
      "Articlo is a blog app that allows you to read and write articles.It uses Supabase as a backend.",
    image: Articl0,
    link: "https://articl0.vercel.app/",
    githubLink: "https://github.com/GegaAbzianidze/Articl0",
    technologies: ["ReactJS", "Supabase", "Tailwind CSS"],
  },
  {
    title: "RemoteSnake",
    description:
      "RemoteSnake is a snake game that allows you to control snake with your phones browser.It uses Socket.io to connect to server.",
    image: SnakeGameWithController,
    link: "https://snake-game-with-controller.vercel.app/",
    githubLink: "https://github.com/GegaAbzianidze/SnakeGameWithController",
    technologies: ["ReactJS", "Socket.io", "Tailwind CSS"],
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

import PropTypes from "prop-types";

const ProjectsCard = ({ project }) => {
  return (
    <div>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-60 rounded-lg object-cover grayscale hover:grayscale-0 transition duration-5"
      />
      <h1 className="text-xl font-semibold mt-3">{project.title}</h1>
      <p className="text-gray-400 mt-2">{project.description}</p>
      <div className="flex gap-2 mt-2">
        {project.tecnologies.map((tecnology, index) => (
          <h1 key={index} className="text-xs bg-[#1a1a1a] px-2 py-1 rounded-lg">
            {tecnology}
          </h1>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-400 hover:text-gray-200"
      >
        View Project
      </a>
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-400 hover:text-gray-200 ml-2"
      >
        View Code
      </a>
    </div>
  );
};

export default ProjectsCard;

ProjectsCard.propTypes = {
  project: PropTypes.object.isRequired,
};

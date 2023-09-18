import PropTypes from "prop-types";

const ProjectsCard = ({ project }) => {
  return (
    <div>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-60 rounded-lg object-cover grayscale hover:grayscale-0 transition duration-5"
        />
      </a>
      <h1 className="text-xl font-semibold mt-3">{project.title}</h1>
      <p className="text-gray-400 mt-2">{project.description}</p>
      <div className="flex gap-2 mt-2 mb-4">
        {project.technologies.map((technology, index) => (
          <h1 key={index} className="text-xs bg-[#1a1a1a] px-2 py-1 rounded-lg">
            {technology}
          </h1>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-400 hover:text-gray-200 p-2 border border-white rounded-lg"
      >
        Live Demo
      </a>
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-400 hover:text-gray-200 ml-2 p-2 border border-white rounded-lg"
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

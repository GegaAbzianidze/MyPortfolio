import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

const ArticlesCard = ({ project }) => {
  return (
    <div className="text-center flex flex-col gap-3">
      <h1 className="text-xl font-semibold mt-3">{project.title}</h1>
      <p>{project.publishedAt.replace(/-/g, '/')}</p>
      <div className="flex gap-2 justify-center">
        <div className="flex gap-2 items-center">
          <Icon icon="ph:hands-clapping" className="text-xl" />
          <p className="text-gray-400">{project.likes}</p>
        </div>
        <div className="flex gap-2 items-center">
          <Icon icon="ph:chat-teardrop" className="text-xl" />
          <p className="text-gray-400">{project.comments}</p>
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-2 mb-4">
        {project.hashTags.map((technology, index) => (
          <h1 key={index} className="text-xs bg-[#1a1a1a] border p-1 md:p-2 xl:p-3 py-1 rounded-full items-center">
            {technology}
          </h1>
        ))}
      </div>
      <a
        href={project.mediumLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-400 hover:text-gray-200 p-2 border border-white rounded-lg"
      >
        View Article
      </a>
    </div>
  );
};

export default ArticlesCard;

ArticlesCard.propTypes = {
  project: PropTypes.object.isRequired,
};

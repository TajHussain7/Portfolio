const ProjectCard = (props) => {
  const { title, description, image, liveDemo, repo } = props;

  // Helpful debug during development — remove when verified
  // eslint-disable-next-line no-console
  console.log("ProjectCard props:", { title, liveDemo, repo });

  const hasLive = Boolean(liveDemo);
  const hasRepo = Boolean(repo);

  return (
    <div className="group bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* subtle overlay with title on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <div className="text-white">
            <div className="text-sm font-semibold tracking-tight">{title}</div>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
        </div>

        <div className="mt-4 flex gap-4">
          <a
            href={hasLive ? liveDemo : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 text-white font-medium py-2 px-4 rounded-lg transition-colors text-center ${
              hasLive
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-blue-600 opacity-50 pointer-events-none"
            }`}
            aria-disabled={!hasLive}
          >
            Live Demo
          </a>

          <a
            href={hasRepo ? repo : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 text-white font-medium py-2 px-4 rounded-lg transition-colors text-center ${
              hasRepo
                ? "bg-gray-800 hover:bg-gray-900"
                : "bg-gray-800 opacity-50 pointer-events-none"
            }`}
            aria-disabled={!hasRepo}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

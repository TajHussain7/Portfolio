import ProjectCard from "./ProjectCard";
import ProjectOne from "../assets/images/ProjectOne.png";
import ProjectTwo from "../assets/images/ProjectTwo.png";
import ProjectThree from "../assets/images/ProjectThree.png";

const Projects = () => {
  const projects = [
    {
      title: "SkyWay Travel Agency",
      description:
        "A comprehensive travel booking platform with flight search, hotel reservations, and tour packages. Built with React, Node.js, and integrated with travel APIs.",
      image: ProjectOne,
      liveDemo:
        "https://tajhussain7.github.io/SkyWay_Travel_Agency/Main_Page/index.html",
      repo: "https://github.com/TajHussain7/SkyWay_Travel_Agency",
    },
    {
      title: "Kashi Pizza Home",
      description:
        "Custom restaurant management software featuring online ordering, menu customization, and real-time order tracking. Built with React and Firebase.",
      image: ProjectTwo,
      liveDemo: "https://kashi-pizza-home.vercel.app/",
      repo: "https://github.com/TajHussain7/Kashi-Pizza-Home",
    },
    {
      title: "AutoMetrics Dashboard",
      description:
        "Analytics dashboard for automotive businesses with real-time metrics, inventory management, and sales tracking. Built with React, TypeScript and Chart.js.",
      image: ProjectThree,
      liveDemo: "https://tajhussain7.github.io/autometrics/",
      repo: "https://github.com/TajHussain7/autometrics",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              liveDemo={project.liveDemo}
              repo={project.repo}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/tajhussain7"
            target="_blank"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clipRule="evenodd"
              />
            </svg>
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

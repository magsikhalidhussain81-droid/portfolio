const projectItems = [
  {
    title: "Diabetic Retinopathy Detection",
    description:
      "AI web app that detects eye disease using deep learning model. Built with React + Flask.",
    github: "https://github.com/yourname/project",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS.",
    github: "/",
    demo: "/",
  },
  {
    title: "Task Manager App",
    description: "A productivity app with authentication, CRUD features, and a clean dashboard.",
    github: "/",
    demo: "/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white p-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projectItems.map((project) => (
            <article key={project.title} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-semibold mb-3">{project.title}</h2>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <div className="flex gap-3">
                <a href={project.github} className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
                  GitHub
                </a>
                <a href={project.demo} className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

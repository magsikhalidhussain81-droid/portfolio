const skillItems = ["React", "Python", "Flask", "Machine Learning"];

const Skills = () => {
  return (
    <section id="skills" className="bg-black text-white p-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skillItems.map((skill) => (
            <div
              key={skill}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-6 text-center font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

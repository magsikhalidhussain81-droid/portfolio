const About = () => {
  return (
    <section id="about" className="bg-black text-white p-10">
      <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gray-900/70">
          <img src="/assets/profile.jpg" alt="profile" className="h-full w-full object-cover" />
        </div>
        <div>
          <h2 className="mb-6 text-3xl font-bold">About Me</h2>
          <p className="mb-4 text-lg leading-relaxed text-gray-300">
            I am a Computer Science graduate from NUTECH, Islamabad, with strong foundations in
            Artificial Intelligence, Machine Learning, and Python programming.
          </p>
          <p className="mb-4 text-gray-300">
            During my internship at CARE - Center for Advanced Research, I worked on real-world
            problem analysis and ML-based solutions with research teams.
          </p>
          <p className="text-gray-300">
            I have hands-on experience in deep learning, medical image analysis, NLP systems, and
            full-stack apps with React and Flask. My goal is to grow through freelancing and
            internships while building impactful AI products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

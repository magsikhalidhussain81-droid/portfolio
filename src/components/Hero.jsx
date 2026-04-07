const Hero = () => {
  return (
    <section className="bg-black text-white p-10 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl text-center">
        <p className="text-indigo-400 uppercase tracking-widest mb-4">Hello, I am</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Name</h1>
        <h2 className="text-xl md:text-2xl text-gray-300 mb-8">AI + Web Developer</h2>
        <a
          href="#projects"
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
        >
          View Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;

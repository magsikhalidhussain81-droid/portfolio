const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white p-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <form className="space-y-4 mb-8">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
          >
            Send Message
          </button>
        </form>

        <div className="flex gap-4 text-sm text-gray-300">
          <a href="/" className="hover:text-white">
            LinkedIn
          </a>
          <a href="/" className="hover:text-white">
            GitHub
          </a>
          <a href="mailto:your@email.com" className="hover:text-white">
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

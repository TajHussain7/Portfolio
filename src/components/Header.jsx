import Tajamal from "../assets/images/Tajamal .jpg";

const Header = () => {
  return (
    <div>
      <header className="fixed w-full z-50 backdrop-blur-sm bg-white/70 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo + Name */}
            <div className="flex items-center space-x-3 shrink-0">
              <img
                src={Tajamal}
                alt="Tajamal Hussain Logo"
                className="w-12 h-12 rounded-full object-cover border-2 border-blue-600 transition-transform transform hover:scale-105"
              />
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                <span className="text-blue-600">Tajamal Hussain</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 hover:underline underline-offset-4 px-3 py-2 text-lg font-medium transition-all"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 hover:underline underline-offset-4 px-3 py-2 text-lg font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-700 hover:text-blue-600 hover:underline underline-offset-4 px-3 py-2 text-lg font-medium transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 hover:underline underline-offset-4 px-3 py-2 text-lg font-medium transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-40"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-yellow-300">Tajamal Hussain</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Full Stack Developer
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-blue-200">
              I create beautiful, responsive web applications using modern
              technologies like React, JavaScript, and Node.js. Passionate about
              clean code and user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;

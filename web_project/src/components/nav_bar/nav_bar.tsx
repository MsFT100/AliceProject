import { FC } from "react";
import { FiHome, FiBook, FiTool, FiMail, FiStar } from "react-icons/fi";
import ReactLogo from "../../assets/react.svg";

const NavBar: FC = () => {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Logo */}
          <div className="flex flex-1 items-center">
            <a href="/" className="inline-flex" aria-label="Brand">
              <img src={ReactLogo} alt="Logo" className="h-8" />
            </a>
          </div>

          {/* Nav Links */}
          <ul className="hidden md:flex flex-1 items-center justify-end gap-4">
            <li>
              <a href="#home" className="flex items-center text-gray-700 hover:text-blue-600">
                <FiHome className="mr-2" /> Home
              </a>
            </li>
            <li>
              <a href="#about" className="flex items-center text-gray-700 hover:text-blue-600">
                <FiBook className="mr-2" /> About
              </a>
            </li>
            <li>
              <a href="#services" className="flex items-center text-gray-700 hover:text-blue-600">
                <FiTool className="mr-2" /> Services
              </a>
            </li>
            <li>
              <a href="#testimonials" className="flex items-center text-gray-700 hover:text-blue-600">
                <FiStar className="mr-2" /> Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="flex items-center text-gray-700 hover:text-blue-600">
                <FiMail className="mr-2" /> Contact
              </a>
            </li>
          </ul>

        </div>
      </div>
    </header>
  );
};

export default NavBar;

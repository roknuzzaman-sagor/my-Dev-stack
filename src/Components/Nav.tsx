import { FaBars } from "react-icons/fa";
import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 border-amber-50 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        
        <button className="text-2xl md:hidden cursor-pointer"> <FaBars/></button>


        <div>
          <img src={Logo} alt="Dev stack Logo" className="h-10 w-auto" />
        </div>

        <ul className="hidden items-center gap-8 md:flex">
          <li className="cursor-pointer text-[#d91b7e]">Home</li>

          <li className="cursor-pointer text-gray-700 transition hover:text-blue-600">
            Technologies
          </li>

          <li className="cursor-pointer text-gray-700 transition hover:text-blue-600">
            Projects
          </li>

          <li className="cursor-pointer text-gray-700 transition hover:text-blue-600">
            About
          </li>

          <li className="cursor-pointer text-gray-700 transition hover:text-blue-600">
            Contact
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button className="font-medium rounded-tl-box px-4 py-2 cursor-pointer">
            Sign In
          </button>

          <button className="rounded-full bg-[#d91b7e] px-4 py-2 font-medium text-white transition hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

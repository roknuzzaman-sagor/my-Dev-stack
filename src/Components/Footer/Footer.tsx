import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

import Logo from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-900 text-white">

      <div className="container mx-auto grid gap-10 px-5 py-12 md:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>

          <div className="flex items-center gap-2">

            <img
              src={Logo}
              alt="Dev Stack"
              className="h-10 w-10"
            />

            <h2 className="text-xl font-bold">
              Dev Stack
            </h2>

          </div>

          <p className="mt-4 text-sm leading-6 text-gray-400">
            Build your ideal development stack by exploring
            modern technologies for your next project.
          </p>


          {/* Social */}
          <div className="mt-5 flex gap-4 text-xl">

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaXTwitter />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

          </div>

        </div>


        {/* Product */}
        <div>

          <h3 className="mb-4 font-bold">
            Product
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">

            <li>Technologies</li>
            <li>Projects</li>
            <li>Features</li>
            <li>Pricing</li>

          </ul>

        </div>


        {/* Company */}
        <div>

          <h3 className="mb-4 font-bold">
            Company
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">

            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
            <li>Blog</li>

          </ul>

        </div>


        {/* Legal */}
        <div>

          <h3 className="mb-4 font-bold">
            Legal
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">

            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>

          </ul>

        </div>

      </div>


      {/* Bottom */}
      <div className="border-t border-gray-800">

        <div className="container mx-auto flex flex-col justify-between gap-3 px-5 py-5 text-sm text-gray-400 sm:flex-row">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <span>Privacy</span>
            <span>Terms</span>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import Logo from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t mt-16 text-gray-300">
      <div className="container mx-auto grid gap-10 px-5 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Dev Stack" />
          </div>

          <p className="mt-4 text-sm leading-6 text-gray-600">
            Curated tools,technology,and resource for developers building modern software.
          </p>

          <div className="mt-5 flex gap-4 text-xl text-gray-700">
            <a href="">
              <FaGithub />
            </a>

            <a href="">
              <FaXTwitter />
            </a>

            <a href="">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-gray-700">PRODUCT</h3>

          <ul className="space-y-3 text-sm text-gray-600">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-gray-700">COMPANY</h3>

          <ul className="space-y-3 text-sm text-gray-600">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-gray-700">LEGAL</h3>

          <ul className="space-y-3 text-sm text-gray-600">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300">
        <div className="container mx-auto flex flex-col justify-between gap-3 px-5 py-5 text-sm text-gray-500 sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5  text-gray-500">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

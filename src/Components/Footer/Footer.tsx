import { Facebook, Github, Linkedin } from "lucide-react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-gray-200 text-base-content rounded p-10">
      <nav className="flex gap-2 md:gap-5 list-none">
        <li className="text-sm ">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="text-sm ">
          <NavLink to="/categories">Categories</NavLink>
        </li>
        <li className="text-sm ">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="text-sm ">
          <NavLink to="/blogs">Blogs</NavLink>
        </li>
        <li className="text-sm ">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <NavLink
            className={"bg-white p-2 rounded-full"}
            to={"https://www.facebook.com/profile.php?id=100066294463471"}
          >
            <Facebook />
          </NavLink>
          <NavLink
            className={"bg-white p-2 rounded-full"}
            to={"https://www.github.com/ahmedsami019"}
          >
            <Github />
          </NavLink>
          <NavLink
            className={"bg-white p-2 rounded-full"}
            to={"https://www.linkedin.com/in/ahmedsami019/"}
          >
            <Linkedin />
          </NavLink>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by jeTona
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;

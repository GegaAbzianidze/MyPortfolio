import { Icon } from "@iconify/react";

const NavBar = () => {
  return (
    <nav className="flex py-9 px-2 md:px-24 lg:px-48 justify-between items-center text-xs border-b-[1px] border-gray-800">
      <div className="flex text-gray-400 items-center gap-1">
        <div className=" bg-[#1a1a1a] border-gray-800 border-[1px] items-center p-3 rounded-full hidden md:block">
          <Icon icon="solar:mailbox-broken" />
        </div>
        <a href="mailto:Gega.abzianidze.1@btu.edu.ge">
          Gega.abzianidze.1@btu.edu.ge
        </a>
      </div>
      <ul className="flex">
        <li className="px-4">
          <a
            href="https://www.linkedin.com/in/abzianidzegega/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="hidden md:block">LinkedIn</h1>
            <Icon
              className="block md:hidden "
              icon="akar-icons:linkedin-fill"
            />
          </a>
        </li>
        /
        <li className="px-4">
          <a
            href="https://github.com/GegaAbzianidze"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="hidden md:block">Github</h1>
            <Icon className="block md:hidden " icon="akar-icons:github-fill" />
          </a>
        </li>
        /
        <li className="px-4">
          <a
            href="https://www.instagram.com/80081z/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="hidden md:block">Instagram</h1>
            <Icon
              className="block md:hidden "
              icon="akar-icons:instagram-fill"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

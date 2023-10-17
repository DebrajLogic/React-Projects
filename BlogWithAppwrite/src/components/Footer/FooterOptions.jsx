import { NavLink } from "react-router-dom";

function FooterOptions({ optionName, link }) {
  return (
    <NavLink
      className={({ isActive }) =>
        `${
          isActive ? "text-pink-700 font-extrabold" : ""
        } text-base font-medium text-gray-900 hover:text-white`
      }
      to={link}
    >
      {optionName}
    </NavLink>
  );
}

export default FooterOptions;

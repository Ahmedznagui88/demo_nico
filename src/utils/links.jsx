import React from "react";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
/* import { useGlobalContext } from "../context"; */

const links = [
  {
    url: "/",
    text: "Home",
    /* icon: <AiFillHome className="nav-icon" />, */
  },
  {
    url: "/servizi",
    text: "Servizi",
    /* icon: <RiTeamFill className="nav-icon" />, */
  },
  {
    url: "/VisiteCatalogo",
    text: "Catalogo",
    /* icon: <AiFillMessage className="nav-icon" />, */
  },
];

const LinkComponent = ({ classLink }) => {
  const { closeSidebar } = useGlobalContext();

  return (
    <ul className={classLink}>
      {links.map((link) => {
        return (
          <Link
            key={link.text}
            to={link.url}
            className="nav-item"
            onClick={closeSidebar}
          >
            <div className="nav-link">
              {link.icon}
              <h5 className="nav-text">{link.text}</h5>
            </div>
          </Link>
        );
      })}
    </ul>
  );
};



export { LinkComponent };

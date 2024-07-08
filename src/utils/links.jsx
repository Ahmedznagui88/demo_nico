import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const links = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/servizi",
    text: "Servizi",
  },
  {
    url: "/VisiteCatalogo",
    text: "Catalogo",
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

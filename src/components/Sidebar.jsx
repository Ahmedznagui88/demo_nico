import React from "react";
import { LinkComponent } from "../utils/links";
import { VscArrowSmallLeft } from "react-icons/vsc";
import { useGlobalContext } from "../context";

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-content">
        <header className="nav-header container">
          <div className="nav-brand">
            <h2>element</h2>
          </div>
          <button className="nav-toggler btn icon-btn" onClick={closeSidebar}>
            <VscArrowSmallLeft className="nav-icon" />
            
          </button>
        </header>
        <div className="container">
          <LinkComponent classLink="sidebar-links" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

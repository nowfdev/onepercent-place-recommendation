import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import SideDrawer from "./SideDrawer";
import NavLinks from "./NavLinks";
import "./MainNavigation.css";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const sideDrawerRef = useRef();

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };

  // Close the drawer if a click is detected outside the drawer
  useEffect(() => {
    console.log(drawerIsOpen); // Logs the drawerIsOpen value when it changes

    if (drawerIsOpen) {
      const handleClickOutside = (event) => {
        if (
          sideDrawerRef.current &&
          !sideDrawerRef.current.contains(event.target)
        ) {
          closeDrawer();
        }
      };

      // Add event listener for click
      document.addEventListener("mousedown", handleClickOutside);

      // Cleanup the event listener on component unmount
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [drawerIsOpen]);

  return (
    <React.Fragment>
      {drawerIsOpen && (
        <SideDrawer ref={sideDrawerRef} isOpen={drawerIsOpen}>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      )}
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Your places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;

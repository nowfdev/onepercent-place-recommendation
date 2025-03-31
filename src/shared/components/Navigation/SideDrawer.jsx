// import React from "react";
// import "./SideDrawer.css";

// const SideDrawer = (props) => {
//   return <aside className="side-drawer">{props.children}</aside>;
// };

// export default SideDrawer;

import React from "react";
import { CSSTransition } from "react-transition-group";

import "./SideDrawer.css";

// Using forwardRef to pass ref to the root element of SideDrawer
const SideDrawer = React.forwardRef((props, ref) => {
  return (
    <CSSTransition
      in={props.isOpen}
      timeout={300}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <div ref={ref} className="side-drawer">
        {props.children}
      </div>
    </CSSTransition>
  );
});

export default SideDrawer;

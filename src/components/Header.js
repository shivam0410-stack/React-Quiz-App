import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = function (props) {
  const [open, setOpen] = useState(false);

  const onClick = function () {
    setOpen(!open);
  };

  return (
    <div>
      <Navbar color="blue" light expand="md">
        <NavbarBrand href="/"> Quiz App </NavbarBrand>
        <NavbarToggler onClick={onClick} />
        <Collapse isOpen={open} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/quiz"> Start Quiz </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

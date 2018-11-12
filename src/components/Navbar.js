import React, { Component } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default class NavbarSection extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleLogout = () => {
    const { userLogout } = this.props.props;
    userLogout();
  };

  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">AC</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              {this.props.props.auth.user !== null ? (
                <NavLink onClick={this.handleLogout}>Logout</NavLink>
              ) : (
                <NavLink onClick={this.props.modal}>Login</NavLink>
              )}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

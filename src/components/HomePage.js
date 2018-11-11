import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Grids from "./Grids";
import HeroSection from "./Hero";
import NavbarSection from "./Navbar";

class Dashboard extends Component {
  componentWillMount() {
    const { fetchUser } = this.props;
    console.log(this.props.auth);
    fetchUser();
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
  handleLogout = () => {
    const { userLogout } = this.props;
    userLogout();
  };

  render() {
    if (this.props.auth.user === null) return <Redirect to="/login" />;
    return (
      <div>
        <NavbarSection />
        <HeroSection />
        <Grids />
      </div>
    );
  }
}

const mapStateToProps = ({ data, auth }, ownProps) => {
  return {
    data,
    auth
  };
};

export default connect(
  mapStateToProps,
  actions
)(Dashboard);

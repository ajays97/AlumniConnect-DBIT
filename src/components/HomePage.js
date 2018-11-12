import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Grids from "./Grids";
import HeroSection from "./Hero";
import NavbarSection from "./Navbar";
import Modal from "./Modal";

class HomePage extends Component {
  state = {
    modalOpen: false
  };

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

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  };

  render() {
    return (
      <div>
        <NavbarSection modal={this.toggleModal} props={this.props} />
        {this.state.modalOpen && (
          <Modal toggleModal={this.toggleModal} state={this.state} />
        )}
        <HeroSection props={this.props} toggleModal={this.toggleModal} />
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
)(HomePage);

import React, { Component } from "react";
import { Provider, Heading, Subhead } from "rebass";
import { Hero } from "react-landing-page";
import Loader from "react-loader-spinner";
import { Button, Alert } from "reactstrap";
import axios from "axios";

class HeroSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isSuccessful: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle = function() {
    this.setState({
      isLoading: !this.state.isLoading
    });
  };

  handleSuccess = () => {
    this.setState({
      isSuccessful: !this.state.isSuccessful
    });
  };

  handleClick = () => {
    if (this.props.props.auth.user !== null) {
      this.toggle();
      axios
        .get("http://localhost:80/send-wishes")
        .then(response => {
          this.toggle();
          console.log(response);
          this.handleSuccess();
          setTimeout(() => {
            this.handleSuccess();
          }, 3000);
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      this.props.toggleModal();
    }
  };

  render() {
    return (
      <Provider>
        <Hero
          color="black"
          bg="white"
          backgroundImage="https://source.unsplash.com/jxaj-UrzQbc/1600x900"
          style={{ minHeight: "50vh" }}
        >
          <Heading>Welcome to Alumni Connect</Heading>
          <Subhead className="hero-subheading">
            everything you need to build a thriving alumni community
          </Subhead>
          {!this.state.isLoading && (
            <Button color="primary" onClick={this.handleClick} className="mt-5">
              Send Birthday Wishes
            </Button>
          )}

          {this.state.isLoading && (
            <div className="mt-4 mb-4">
              <Loader type="Puff" color="#007BFF" height="100" width="100" />
              <span className="hero_text">
                <em>Wishing</em>
              </span>
            </div>
          )}
          {this.state.isSuccessful && (
            <Alert className="mt-2 hero_alert" color="success">
              Wishes sent successfully...
            </Alert>
          )}
        </Hero>
      </Provider>
    );
  }
}

export default HeroSection;

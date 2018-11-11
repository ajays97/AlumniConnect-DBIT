import React, { Component } from "react";
import { Provider, Heading, Subhead } from "rebass";
import { Hero } from "react-landing-page";
import Loader from "react-loader-spinner";
import { Button } from "reactstrap";

class HeroSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  toggle = () => {
    this.setState({
      isLoading: !this.state.isLoading
    });
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
            <Button color="primary" onClick={this.toggle} className="mt-4">
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
        </Hero>
      </Provider>
    );
  }
}

export default HeroSection;

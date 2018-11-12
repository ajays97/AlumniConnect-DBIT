import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Login from "./Login";

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: this.props.toggleModal()
    });
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.state.modalOpen}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Admin Login</ModalHeader>
          <ModalBody>
            <Login toggleModal={this.props.toggleModal} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;

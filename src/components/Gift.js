import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Gift extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: "",
      present: ""
    };
  }
  render() {
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Person</Form.Label>
            <Form.Control
              className="input-person"
              onChange={event => this.setState({ person: event.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Present</Form.Label>
            <Form.Control
              className="input-present"
              onChange={event => this.setState({ present: event.target.value })}
            />
          </Form.Group>
        </Form>
        <Button
          className="btn-remove"
          onClick={() => this.props.removeGift(this.props.gift.id)}
        >
          Remove Gift
        </Button>
      </div>
    );
  }
}

export default Gift;

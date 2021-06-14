import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export class UpdateForm extends Component {
  render() {
    return (
      <div id="update-form">
        <Form onSubmit={this.props.formSubmitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={this.props.inputData.name}
              name="name"
              type="text"
              placeholder="Enter a Name"
              onChange={this.props.changeInputHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image</Form.Label>
            <Form.Control
              value={this.props.inputData.img}
              name="img"
              type="text"
              placeholder="Enter an Image"
              onChange={this.props.changeInputHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Level</Form.Label>
            <Form.Control
              value={this.props.inputData.level}
              name="level"
              type="text"
              placeholder="Enter Level"
              onChange={this.props.changeInputHandler}
            />
          </Form.Group>
          <Button type="submit">Update</Button>
        </Form>
      </div>
    );
  }
}

export default UpdateForm;

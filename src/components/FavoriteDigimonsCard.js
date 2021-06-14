import React, { Component } from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export class FavoriteDigimonsCard extends Component {
  render() {
    return (
      <Col lg={3}>
        <Card style={{ width: '18rem', margin: '30px 0' }}>
          <Card.Img variant="top" src={this.props.item.img} />
          <Card.Body>
            <Card.Title>{this.props.item.name}</Card.Title>
            <Card.Text>{this.props.item.level}</Card.Text>
            <Button
              onClick={() =>
                this.props.deleteFavoriteHandler(this.props.item._id)
              }
              variant="danger"
            >
              Delete
            </Button>
            <Button
              onClick={() => this.props.getOldUpdateData(this.props.item)}
              variant="primary"
              href="#update-form"
            >
              Update
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default FavoriteDigimonsCard;

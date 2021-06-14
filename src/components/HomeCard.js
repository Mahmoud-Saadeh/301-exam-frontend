import React, { Component } from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
export class HomeCard extends Component {
  addToFavoriteHandler = (favoriteDigimon) => {
    //favoriteDigimon
    axios.post(`${process.env.REACT_APP_SERVER}/addfavorite`, {
      favoriteDigimon,
    });
  };

  render() {
    return (
      <Col lg={3}>
        <Card style={{ width: '18rem', margin: '30px 0' }}>
          <Card.Img variant="top" src={this.props.item.img} />
          <Card.Body>
            <Card.Title>{this.props.item.name}</Card.Title>
            <Card.Text>{this.props.item.level}</Card.Text>
            <Button
              onClick={() => this.addToFavoriteHandler(this.props.item)}
              variant="primary"
            >
              Add To Favorite
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default HomeCard;

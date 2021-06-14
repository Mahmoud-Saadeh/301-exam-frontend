import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeCard from './HomeCard';

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      digimons: '',
    };
  }

  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_SERVER}/getdata`).then((res) => {
      this.setState({
        digimons: res.data,
      });
    });
  };
  render() {
    return (
      <Container>
        <Row>
          {this.state.digimons &&
            this.state.digimons.map((item, index) => (
              <HomeCard key={index} item={item} />
            ))}
        </Row>
      </Container>
    );
  }
}

export default Main;

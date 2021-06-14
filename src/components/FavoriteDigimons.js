import React, { Component } from 'react';
import FavoriteDigimonsCard from './FavoriteDigimonsCard';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import UpdateForm from './UpdateForm';

export class FavoriteDigimons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favoriteData: '',
      inputData: '',
      showUpdateForm: false,
    };
  }

  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER}/getfavorite`)
      .then((res) => {
        this.setState({
          favoriteData: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
  getOldUpdateData = (data) => {
    this.setState({ inputData: data, showUpdateForm: true });
  };
  changeInputHandler = (e) => {
    if (e.target.name === 'name') {
      this.setState({
        inputData: { ...this.state.inputData, name: e.target.value },
      });
    } else if (e.target.name === 'img') {
      this.setState({
        inputData: { ...this.state.inputData, img: e.target.value },
      });
    } else if (e.target.name === 'level') {
      this.setState({
        inputData: { ...this.state.inputData, level: e.target.value },
      });
    }
  };
  formSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({ showUpdateForm: false });
    axios
      .put(`${process.env.REACT_APP_SERVER}/updatefavorite`, {
        favoriteDigimon: this.state.inputData,
      })
      .then((res) => {
        this.setState({ showUpdateForm: false, favoriteData: res.data });
      });
  };

  deleteFavoriteHandler = (id) => {
    axios
      .delete(`${process.env.REACT_APP_SERVER}/deletefavorite/${id}`)
      .then((res) => {
        this.setState({ favoriteData: res.data });
      });
  };
  render() {
    return (
      <div>
        {this.state.inputData && this.state.showUpdateForm && (
          <UpdateForm
            inputData={this.state.inputData}
            changeInputHandler={this.changeInputHandler}
            formSubmitHandler={this.formSubmitHandler}
          />
        )}
        <Container>
          <Row>
            {this.state.favoriteData &&
              this.state.favoriteData.map((item, index) => (
                <FavoriteDigimonsCard
                  key={index}
                  item={item}
                  getOldUpdateData={this.getOldUpdateData}
                  deleteFavoriteHandler={this.deleteFavoriteHandler}
                />
              ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default FavoriteDigimons;

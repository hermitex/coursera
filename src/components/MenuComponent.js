import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import DishDetail from "./DishDetailComponent";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    this.setState({
      selectedDish: dish,
    });
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardBody className="ml-5">
                <CardTitle>{dish.name}</CardTitle>
              </CardBody>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <DishDetail dishes={this.state.selectedDish}></DishDetail>
      </div>
    );
  }
}

export default Menu;

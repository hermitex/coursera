import React, { Component } from "react";

import Menu from "../components/MenuComponent";
import DishDetail from "../components/DishDetailComponent";
import { DISHES } from "../shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelect(dishID) {
    this.setState({
      selectedDish: dishID,
    });
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Menu
          dishes={this.state.dishes}
          onClick={(dishID) => this.onDishSelect(dishID)}
        ></Menu>
        <DishDetail
          dishes={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        ></DishDetail>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;

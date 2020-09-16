import React, { Component } from "react";
import Home from "./HomeComponent";
import Menu from "../components/MenuComponent";
import DishDetail from "../components/DishDetailComponent";
import Contact from "./ContactComponent";
import { DISHES } from "../shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    const HomePage = () => {
      return (
        <div>
          <Home />
        </div>
      );
    };
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes}></Menu>}
          />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;

import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";
class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: props.dishes,
    };
  }

  renderDish(dish) {
    if (dish !== null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg
              width="100%"
              src={this.props.dishes.image}
              alt={this.props.dishes.name}
            />
            <CardBody>
              <CardTitle className="h4">{this.props.dishes.name}</CardTitle>
              <CardText>{this.props.dishes.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  renderComments(dish) {
    if (dish !== null) {
      var dishComment = dish.comments.map((comment, i) => {
        return (
          <Card key={i}>
            <CardText>{comment.comment}</CardText>
            <CardText>
              --{comment.author}, {comment.date}
            </CardText>
          </Card>
        );
      });
    } else {
      console.log(this.props.dishes);
      return <div></div>;
    }
    console.log(dishComment);
  }
  render() {
    return (
      <div className="row">
        {this.renderDish(this.props.dishes)}
        {this.renderComments(this.props.dishes)}
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(this.props.dishes)}
        </div>
      </div>
    );
  }
}

export default DishDetail;

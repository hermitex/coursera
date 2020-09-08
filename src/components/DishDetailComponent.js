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
    if (this.props.dishes !== undefined) {
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
    if (this.props.dishes !== undefined) {
      return (
        <ul className="list-unstyled">
          <li className="h4">Comments</li>
          {dish.comments.map((comment, i) => {
            return (
              <div key={i} className="mb-2">
                <li>{comment.comment}</li>
                <li>
                  --{comment.author}{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                    weekday: "short",
                  }).format(new Date(Date.parse(comment.date)))}
                </li>
              </div>
            );
          })}
        </ul>
      );
    }
    return <div></div>;
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderDish(this.props.dishes)}
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(this.props.dishes)}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;

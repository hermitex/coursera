import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";
class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: props.dishes,
    };
  }

  //   renderDish(dish){
  //       if(dish!==null){
  //           return(

  //           )
  //       }
  //   }
  render() {
    let dish = "";
    let comment = "";
    if (this.props.dishes !== null) {
      comment = this.props.dishes.comments.map((comment, i) => {
        return (
          <div key={i}>
            <CardText>{comment.comment}</CardText>
            <CardText>
              --{comment.author}, {comment.date}
            </CardText>
          </div>
        );
      });
      console.log(comment);
      dish = (
        <Card className="col-12 col-md-5 m-1">
          <CardImg
            width="100%"
            src={this.props.dishes.image}
            alt={this.props.dishes.name}
          />
          <CardBody>
            <CardTitle className="h5">{this.props.dishes.name}</CardTitle>
            <CardText>{this.props.dishes.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      dish = <div></div>;
    }
    console.log(comment);
    return (
      <div className="container">
        <div className="row">
          {dish}
          <div className="col-12 col-md-5 m-1">
            <h5>{this.props.heading}</h5>
            {comment}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;

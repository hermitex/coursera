import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";

const RenderDish = ({ dish }) => {
  if (dish !== undefined) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle className="h4">{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return <div></div>;
  }
};

const DishComments = ({ dish }) => {
  if (dish !== undefined) {
    return (
      <ul className="list-unstyled">
        <li className="h4">Comments</li>
        {dish.comments.map((comment, i) => {
          return (
            <div key={i} className="mb-2">
              <li>{comment.comment}</li>
              <li>
                {"--"}
                {comment.author}
                {", "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  day: "2-digit",
                  month: "short",
                }).format(new Date(Date.parse(comment.date)))}
              </li>
            </div>
          );
        })}
      </ul>
    );
  }
  return <div></div>;
};

const DishDetail = (props) => {
  return (
    <div className="container">
      <div className="row">
        <RenderDish dish={props.dishes} />
        <div className="col-12 col-md-5 m-1">
          <DishComments dish={props.dishes} />
        </div>
      </div>
    </div>
  );
};

export default DishDetail;

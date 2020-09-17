import React from "react";

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

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

const DishComments = ({ comments }) => {
  if (comments !== null) {
    return (
      <ul className="list-unstyled">
        <li className="h4">Comments</li>
        {comments.map((comment, i) => {
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
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>

        <div className="row">
          <RenderDish dish={props.dish} />
          <div className="col-12 col-md-5 m-1">
            <DishComments comments={props.comments} />
          </div>
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default DishDetail;

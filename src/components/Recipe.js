import React, { Component } from "react";
// import { Button, Card } from "antd";
// const { Meta } = Card;

export default class Recipe extends Component {
  render() {
    const { image_url, source_url, publisher, title } = this.props.recipe;

    return (
      <>
        <div className="col-11 mx-auto col-md-6 col-lg-4 my-3">
          {/* <Card
            headStyle={{ background: "#183D80", textEmphasis: "white" }}
            bordered
            size="small"
            hoverable
            style={{ width: 300 }}
            cover={
              <img style={{ height: "14rem" }} alt="example" src={image_url} />
            }
            actions={[
              <Button
                style={{ background: "#F25757 ", color: "white" }}
                shape="round"
                onClick={this.props.handleDetails}
              >
                Details
              </Button>,
              <Button
                style={{
                  background: "#F25757 ",
                  color: "white",
                  paddingTop: 4
                }}
                shape="round"
                href={source_url}
                target="_blank"
              >
                Recipe
              </Button>
            ]}
          >
            <Meta title={title} description={publisher} />
          </Card> */}

          <div className="card border-dark shadow-lg">
            <img
              src={image_url}
              style={{ height: "14rem" }}
              alt="recipe"
              className="img-card-top"
            />
            <div className="card-body text-capitalize">
              <h6>{title}</h6>
              <div className="text-warning text-slanted">
                Provided by {publisher}
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-outline-primary text-capitalize btn-sm"
                onClick={this.props.handleDetails}
              >
                Details
              </button>

              <a
                href={source_url}
                className="btn btn-outline-success ml-5 btn-sm text-capitalize"
                target="_blank"
                rel="noopener noreferrer"
              >
                recipe
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

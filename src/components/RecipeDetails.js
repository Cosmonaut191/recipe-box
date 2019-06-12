import React, { Component } from "react";
import { recipe } from "../tempDetails";
import { Button } from "antd";

export default class RecipeDetails extends Component {
  state = {
    recipe: recipe
  };

  async componentDidMount() {
    const id = this.props.id;
    const url = `https://www.food2fork.com/api/get?key=6646a5373bde4ec9a9785a6820c8cda5&rId=${id}
    `;
    try {
      const data = await fetch(url);
      const jsonData = await data.json();
      console.log(jsonData);
      this.setState({
        recipe: jsonData.recipe
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {
      image_url,
      ingredients,
      publisher,
      publisher_url,
      source_url,
      title
    } = this.state.recipe;
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <Button
                style={{
                  background: "#F25757 ",
                  color: "white",
                  marginBottom: "5%"
                }}
                shape="round"
                onClick={() => {
                  this.props.handleIndex(true);
                }}
              >
                Back to Recipes
              </Button>
              <img src={image_url} alt="" className="d-block w-100" />
            </div>
            <div className="col-10 mx-auto col-md-6 my-3">
              <h6 className="text-uppercase">{title}</h6>
              <h6 className="text-warning text-capitalize text-slanted">
                Publised by {publisher}
              </h6>
              <a
                href={publisher_url}
                className="btn btn-primary btn-rounded mt-2 text-capitalize"
                target="_blank"
                rel="noopener noreferrer"
              >
                Publisher Webpage
              </a>
              <a
                href={source_url}
                className="btn btn-success mx-5 btn-rounded mt-2 text-capitalize"
                target="_blank"
                rel="noopener noreferrer"
              >
                Recipe Link
              </a>
              <ul className="list-group mt-4 ">
                <h2 className="mt-3 mb-4 text-uppercase text-white">
                  Ingredients{" "}
                </h2>
                {ingredients.map((value, index) => {
                  return (
                    <li
                      className="list-group-item bg-dark text-white"
                      key={index}
                    >
                      {value}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

import React, { Component } from "react";
import "./App.css";
// import { Row, Col, Card, Icon } from "antd";

import { recipes } from "./tempList";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";

class App extends Component {
  state = {
    recipes: recipes,
    url:
      "https://www.food2fork.com/api/search?key=6646a5373bde4ec9a9785a6820c8cda5",
    id: 35384,
    screen: true,
    search: "",
    error: ""
  };

  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      if (jsonData.recipes.length === 0) {
        this.setState(() => {
          return { error: "Sorry, No results found" };
        });
      } else {
        this.setState(() => {
          return { recipes: jsonData.recipes };
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  // componentDidMount() {
  //   this.getRecipes();
  // }

  handleIndex = index => {
    this.setState({
      screen: index
    });
  };

  handleDetails = (index, id) => {
    this.setState({
      screen: index,
      id: id
    });
  };

  handleChange = e => {
    this.setState({ search: e.target.value }, () =>
      console.log(this.state.search)
    );
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState(
      () => {
        return {
          url: `https://www.food2fork.com/api/search?key=6646a5373bde4ec9a9785a6820c8cda5&q=${
            this.state.search
          }`,
          search: ""
        };
      },
      () => {
        this.getRecipes();
      }
    );
  };

  render() {
    return (
      <div className="App">
        {this.state.screen ? (
          <RecipeList
            recipes={this.state.recipes}
            handleDetails={this.handleDetails}
            value={this.state.search}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            error={this.state.error}
            handleIndex={this.handleIndex}
          />
        ) : (
          <RecipeDetails handleIndex={this.handleIndex} id={this.state.id} />
        )}
      </div>
    );
  }
}
export default App;

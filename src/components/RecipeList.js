import React, { Component } from "react";
import RecipeSearch from "./RecipeSearch";
import Recipe from "./Recipe";
import { Button } from "antd";

export default class RecipeList extends Component {
  render() {
    const { recipes, value, handleSubmit, handleChange, error } = this.props;
    return (
      <>
        <RecipeSearch
          value={value}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />

        <div className="container my-5">
          <div className="row">
            <div className="col-10 col-md-6 mx-auto text-center text-uppercase mb-3">
              <h1 className="text-slanted">Recipes </h1>
            </div>
          </div>
          <div className="row">
            {error ? (
              <div>
                <h1 className="text-danger text-center">{error}</h1>
              </div>
            ) : (
              recipes.map(recipe => {
                return (
                  <Recipe
                    key={recipe.recipe_id}
                    recipe={recipe}
                    handleDetails={() => {
                      this.props.handleDetails(false, recipe.recipe_id);
                    }}
                  />
                );
              })
            )}
          </div>
        </div>
      </>
    );
  }
}

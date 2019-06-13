import React, { Component } from "react";
import { Icon } from "antd";
export default class h1 extends Component {
  render() {
    const { value, handleSubmit, handleChange } = this.props;
    return (
      <div>
        <nav
          className="navbar navbar-dark sticky-top"
          style={{
            background: "#051839"
          }}
        >
          <div className="navbar-brand text-primary ">
            <div
              style={{
                color: "green",
                textShadow: "3px 2px white",
                fontSize: 50,
                fontWeight: "bold",
                text: "italics"
              }}
            >
              Recipe-Box
              <Icon
                type="coffee"
                style={{
                  color: "violet",
                  textShadow: "3px 2px white",
                  fontSize: 50,
                  fontWeight: "bold",
                  paddingLeft: 20,
                  paddingBottom: 20
                }}
              />
            </div>
          </div>
          <form class="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="chicken,onion,tomato"
              aria-label="Search"
              value={value}
              onChange={handleChange}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </nav>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }

  toggleSideBar = () => {
    this.setState(prevState => {
      return {
        toggle: !prevState.toggle
      };
    });
  };
  render() {
    console.log(this.state.toggle);
    return (
      <header>
        <div>
          <div className="logo">Start Bootstrap</div>
          <button className="menbut" onClick={this.toggleSideBar}>
            {this.state.toggle ? "Menu" : "Menu"}
          </button>
          <nav className={this.state.toggle ? "show" : ""}>
            <ul>
              <li>
                <a href="#/services">Services</a>
              </li>
              <li>
                <a href="#/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#/about">About</a>
              </li>
              <li>
                <a href="#/team">Team</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

import React from "react";

import "./Quotes.css";
import axios from "axios";

class Quotes extends React.Component {
  state = {
    quotes: ""
  };

  getQuotes = () => {
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(res => this.setState({ quotes: res.data[0] }));
  };

  componentDidMount() {
    this.getQuotes();
  }

  render() {
    return (
      <div className="Quotes">
        <h1>Simpson's quotes</h1>
        <p>{this.state.quotes.quote}</p>
        <img src={this.state.quotes.image} alt={this.state.quotes.character} />
        <p>{this.state.quotes.character}</p>
        <button type="button" onClick={this.getQuotes}>
          Get quote
        </button>
      </div>
    );
  }
}

export default Quotes;

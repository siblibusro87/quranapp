import React, { Component } from "react";
import "./Translation.css";

class Translation extends Component {
  render() {
    if (!this.props.ayah) return <p>Loading....</p>;
    return (
      <div className="Translation text-right heading">
        <div
          key={this.props.ayah.number}
          className={"ayah " + this.props.language}
          id={"ayah_".concat(this.props.ayah.numberInSurah)}
        >
          {this.props.ayah.text}
        </div>
      </div>
    );
  }
}

export default Translation;

import React, { Component } from "react";

export class Spinner extends Component {
  render() {
    return (
      <>
        <div className="spinner-container">
          <div className="lds-ellipsis text-center">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </>
    );
  }
}

export default Spinner;

import React from "react";

class Preloader extends React.Component {
  render() {
    return (
      <div className="preloader">
        <div className="sk-double-bounce">
          <div className="sk-child sk-double-bounce1" />
          <div className="sk-child sk-double-bounce2" />
        </div>
      </div>
    );
  }
}

export default Preloader;

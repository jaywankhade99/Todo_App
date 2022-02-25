import React, { Component } from "react";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: "batman",
    };
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
    console.log("MOunting", this.inputRef);
  }

  handleClick = () => {
    alert("Welcome " + this.inputRef.current.value);
  };
  render() {
    const { hero } = this.state;
    const { place } = this.props;

    if (place) {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12" style={{ textAlign: "center" }}>
              <h1>WELCOME WORLD</h1>
              <input typeof="text" ref={this.inputRef} />
            </div>
            <div className="col-12" style={{ textAlign: "center" }}>
              <button className="btn btn-primary" onClick={this.handleClick}>
                Click Here
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      throw new Error("No Place");
    }
  }
}

export default Demo;

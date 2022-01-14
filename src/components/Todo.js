import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "aalekh",
    };
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
    console.log("MOunting", this.inputRef);
  }

  handleClick=()=>{
      alert("Welcome "+this.inputRef.current.value);
  }
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12" style={{ textAlign: "center" }}>
              <h1>HELLO WORLD</h1>
              <input typeof="text" ref={this.inputRef} />
            </div>
            <div className="col-12" style={{ textAlign: "center" }}>
              <button className="btn btn-primary" onClick={this.handleClick}>Click Here</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Todo;

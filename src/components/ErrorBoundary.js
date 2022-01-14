import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <h1 style={{ textAlign: "center" ,color:"red"}}>Please try again later!!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

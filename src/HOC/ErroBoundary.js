import React, { Component } from "react";

export class ErroBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isError: false,
    };
  }

  componentDidCatch() {
    this.setState({ isError: true });
  }

  render() {
    return (
      <>
        {!this.state.isError ? this.props.children : "Something went wrong !"}
      </>
    );
  }
}

export default ErroBoundary;

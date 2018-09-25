import React, { Component } from "react";
import anime from "animejs";
import logo from "../../img/tomassaplogo-01.png";

class Logo extends Component {
  constructor(props) {
    super(props);

    // create cup DOM reference
    this.logoRef = React.createRef();
  }

  componentDidMount() {
    this.setState({
      in: true
    });
    const fadeIn = anime({
      targets: this.logoRef.current,
      delay: 500,
      duration: 3000,
      scale: [0.5, 1.2],
      opacity: 1
    });
  }

  render() {
    return (
      <div className="container">
        <img ref={this.logoRef} className="logo" src={logo} />
      </div>
    );
  }
}

export default Logo;

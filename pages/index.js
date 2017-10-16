import React from "react";

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainHue: 45
    };
  }

  componentDidMount() {
    const { mainHue } = this.state;
    this.hueInterval = setInterval(() => {
      this.setState(prevState => ({
        mainHue: (prevState.mainHue + 1) % 360
      }));
    }, 16);
  }

  componentWillUnmount() {
    clearInterval(this.hueInterval);
  }

  render() {
    const { mainHue } = this.state;
    return (
      <div>
        <h1>Edge Cases</h1>
        <p>Under maintenance.</p>
        <style jsx>
          {`
            div {
              font-family: Menlo, Monaco, monospace;
              margin: 8em 8em;
            }
            h1 {
              color: hsl(${mainHue}, 80%, 70%);
            }
            p {
              color: hsl(${(mainHue + 60) % 360}, 60%, 50%);
            }
          `}
        </style>
      </div>
    );
  }
}

import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hex: "#FFFFFF",
      rgb: "255,255,255",
    };
  }

  checkHex = (hex) => {
    if(hex.length != 7) return;
    const hexRegex = /^[#]*([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i;
    if (hexRegex.test(hex)) {
      return true;
    } else {
      this.setState({
        rgb: `Ошибка`,
      });
      return false;
    }
  }

  hexToRgb = (hex) => {
    if (hex.length >7) return;
    this.setState({ hex });
    const chek = this.checkHex(hex)
    if (chek) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      this.setState({
        rgb: `rgb(${parseInt(result[1], 16)}, ${parseInt(
          result[2],
          16
        )}, ${parseInt(result[3], 16)})`,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div
          className="content"
          style={{ backgroundColor: `${this.state.rgb}` }}
        >
          <input
            type="text"
            id="hex"
            placeholder="hex"
            value={this.state.hex}
            onChange={(event) => this.hexToRgb(event.target.value)}
          />
          <br />
          <input
            type="text"
            disabled
            id="rgb"
            placeholder="rgb"
            value={this.state.rgb}
          />
        </div>
      </div>
    );
  }
}

export default App;

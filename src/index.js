import React from "react";
import ReactDOM from "react-dom";
import HemisphereDisplay from "./components/HemisphereDisplay";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//       (position) => console.log(position),
//       (err) => console.log(err)
//   )

//   return(
//     <div>

//     </div>
//    );
// };

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: "",
      longitude: "",
      errorMessage: "",
    };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
        throw err;
      }
    );
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return (
        <div>
          <div>{this.state.errorMessage}</div>
        </div>
      );
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return (
        <HemisphereDisplay latitude={this.state.latitude} longitude={this.state.longitude}/>
      );
    } else {
      return <div>loading...</div>;
    }
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

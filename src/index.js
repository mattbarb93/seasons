import React from "react";
import ReactDOM from "react-dom";

//Class based component so we can eventually render the location on the screen
class App extends React.Component {
  //State initialization
  state = { latitude: null, errorMessage: "" };

  //Good practice is to do API calls on componentDidMount
  componentDidMount() {
    //Get position for the user. Throws an error if user denies sharing location
    window.navigator.geolocation.getCurrentPosition(
      //Calling setState to update the latitude property inside the state object
      (position) => this.setState({ latitude: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    //Conditional rendering based on the user's geolocation sharing choice.
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.latitude) {
      return <div>Latitude: {this.state.latitude}</div>;
    }

    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

import axios from "axios";
import { Component } from "react";

export default class DogPics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breed: "random",
      img: "jyjt"
    };
  }
  handleFromEvent = (e) => {
    const value = e.target.value;
    console.log(value);
    this.setState({ breed: value });
  };
  async componentDidMount() {
    try {
      console.log("get");
      const dogData = await axios.get(
        "https://dog.ceo/api/breeds/image/random "
      );
      console.log("forom" + dogData.data.message);
      this.setState({ img: dogData.data.message, breed: "random" });
    } catch (error) {
      console.log(error);
    }
  }
  async componentDidUpdate(prevProps, prevState) {
    console.log("gte");
    if (prevState.breed !== this.state.breed) {
      try {
        console.log("get");
        const dogData = await axios.get(
          `https://dog.ceo/api/breed/${this.state.breed}/images/random`
        );
        console.log(dogData.data.message);
        this.setState({ img: dogData.data.message });
      } catch (error) {
        console.log(error);
      }
    }
  }
  buttonHandler = async () => {
    var url = `https://dog.ceo/api/breed/${this.state.breed}/images/random`;
    if (this.state.breed === "random") {
      url = "https://dog.ceo/api/breeds/image/random ";
    }
    try {
      console.log("get");
      const dogData = await axios.get(url);
      console.log(dogData.data.message);
      this.setState({ img: dogData.data.message });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log("ender");
    return (
      <div>
        <form>
          <label for="dogs">Choose a breed: </label>
          <select name="dogs" id="dogs" onChange={this.handleFromEvent}>
            <option value="random">Random</option>
            <option value="beagle">Beagle</option>
            <option value="boxer">Boxer</option>
            <option value="dalmatian">Dalmatian</option>
            <option value="husky">Husky</option>
          </select>
        </form>
        <div>
          <img
            src={this.state.img}
            alt={this.state.breed}
            style={{ width: "300px", height: "400px" }}
          />
        </div>
        <button onClick={this.buttonHandler}>next</button>
      </div>
    );
  }
}

import React from "react";
import "./Item.css";

//El componente PADRE es LISTA
class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      image: "",
      rating: 1,
      stars: [],
    };
  }

  componentDidMount() {
    this.setState({
      id: this.props.id,
      title: this.props.title,
      image: this.props.image,
      rating: parseInt(this.props.rating),
      stars: Array(parseInt(this.props.rating)).fill(0),
    });
  }

  onChangeRating = (e) => {
    const rating = parseInt(e.target.value);

    this.setState({
      rating: parseInt(e.target.value),
      stars: Array(parseInt(e.target.value)).fill(0),
    });

    this.props.onupdateratingList({
      id: this.state.id,
      title: this.state.title,
      image: this.state.image,
      rating: rating,
    });
  };

  onRemove = (e) => {
    this.props.onremoveList(this.props.id);
  };

  render() {
    return (
      <div className="item">
        <div className="image">
          <img src={"img/" + this.state.image} width="100%" />
        </div>
        <div className="titleBook">{this.state.title}</div>
        <div className="ratingCenter">
          <p>
            {this.state.stars.map((x) => (
              <img src="img/star.png" className="star" />
            ))}
          </p>
          <div className="rating">
            <span className="spanRating">Rating: </span>
            <select
              className="select"
              value={this.state.rating}
              onChange={this.onChangeRating}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="actions">
          <button onClick={this.onRemove}>Delete</button>
        </div>
      </div>
    );
  }
}

export default Item;

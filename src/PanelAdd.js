import React from "react";
import "./PanelAdd.css";

class PanelAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //EN REACT cuando utilizamos un formulario siempre recomiendan utilizar los state para manejar los cambios.
      title: "",
      image: "",
      rating: "",
    };
  }

  onChangeTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  onChangeImage = (e) => {
    this.setState({ image: e.target.value });
  };

  onChangeRating = (e) => {
    const rating = parseInt(e.target.value); //Me aseguro de convertirlo en un numero entero
    this.setState({ rating: rating });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const title = this.state.title;
    const image = this.state.image;
    const rating = this.state.rating;

    //Llamamos al props de menu.js que se llame onadd (le mandaremos de parametro el objeto con su titulo, image y rating. title: deLaConstanteTitulo de la linea 29)
    this.props.onadd({ title: title, image: image, rating: rating });
    this.props.oncancel();
  };

  render() {
    return (
      <div className="new-item-panel-container">
        <div className="new-item-panel">
          <form onSubmit={this.onSubmit}>
            <p>
              <label>Title of the book:</label> <br />
              <input
                onChange={this.onChangeTitle}
                type="text"
                name="title"
                placeholder="Write the title of the book..."
                className="input"
              />
            </p>
            <p>
              <label>Image name:</label> <br />
              <input
                onChange={this.onChangeImage}
                type="text"
                name="image"
                placeholder="Write the name of the image..."
                className="input"
              />
            </p>
            <p>
              <label>Rating:</label>
              <select className="select" onChange={this.onChangeRating}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </p>
            <input type="submit" className="buttonAdd" value="Register book" />
            <button
              onClick={this.props.oncancel}
              className="button buttonCancel"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default PanelAdd;

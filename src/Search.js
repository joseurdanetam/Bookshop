import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  onChangeEvent = (e) => {
    const query = e.target.value.toString().toLowerCase(); //Creamos la query, lo convierto a string y lo pongo en minusculas
    this.props.onsearchMenu(query);
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Search your favorite book..."
        onChange={this.onChangeEvent}
      />
    );
  }
}

export default Search;

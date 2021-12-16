import React from "react";
import Search from "./Search";
import "./Menu.css";
import PanelAdd from "./PanelAdd";

class Menu extends React.Component {
  constructor(props) {
    super(props); //super(props) Sirve para usar this dentro de un constructor

    this.state = { newItemPanel: false };

    //Binding para que funcionen los eventos add y onCancel
    this.add = this.add.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  add() {
    this.setState({ newItemPanel: true });
    console.log("mensaje");
  }

  onCancel() {
    this.setState({ newItemPanel: false });
  }

  render() {
    return (
      <div className="container">
        <div className="title">{this.props.title}</div>

        <div className="search">
          <Search onsearchMenu={this.props.onsearchApp} />
        </div>

        <div className="actions">
          <button className="button btn" onClick={this.add}>
            + Add new book
          </button>
        </div>

        {this.state.newItemPanel ? (
          <PanelAdd oncancel={this.onCancel} onadd={this.props.onadd} /> //onadd se envia desde PanelAdd.js hasta el App.js, que es donde esta la info de todos los libros
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Menu;

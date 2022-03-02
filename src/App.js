import React from "react";
import "./App.css";
import Menu from "./Menu";
import List from "./List";
import Footer from "./Footer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [
        {
          id: 0,
          rating: 5,
          title: "A Song of Ice and Fire: A Game Of Thrones",
          image: "libro02.jpg",
        },
        {
          id: 1,
          rating: 4,
          title: "A Song of Ice and Fire: A Clash Of Kings",
          image: "libro06.jpg",
        },
        {
          id: 2,
          rating: 5,
          title: "A Song of Ice and Fire: A Storm Of Swords",
          image: "libro07.jpg",
        },
        {
          id: 3,
          rating: 3,
          title: "A Song of Ice and Fire: A Feast For Crows",
          image: "libro08.jpg",
        },
        {
          id: 4,
          rating: 4,
          title: "A Song of Ice and Fire: A Dance With Dragons",
          image: "libro09.jpg",
        },
        {
          id: 5,
          rating: 4,
          title: "Harry Potter & The Philosopher's Stone",
          image: "libro10.jpg",
        },
        {
          id: 6,
          rating: 2,
          title: "Harry Potter & The Chamber Of Secrets",
          image: "libro11.jpg",
        },
        {
          id: 7,
          rating: 5,
          title: "Harry Potter & The Prisoner Of Azkaban",
          image: "libro12.jpg",
        },
        {
          id: 8,
          rating: 3,
          title: "Harry Potter & The Goblet Of Fire",
          image: "libro13.jpg",
        },
        {
          id: 9,
          rating: 4,
          title: "Harry Potter & The Order of the Phoenix",
          image: "libro14.jpg",
        },
        {
          id: 10,
          rating: 4,
          title: "Harry Potter & The Half-Blood Prince",
          image: "libro15.jpg",
        },
        {
          id: 11,
          rating: 4,
          title: "Harry Potter & The Deathly Hallows",
          image: "libro16.jpg",
        },
        {
          id: 12,
          rating: 5,
          title: "Mistborn: The Final Empire",
          image: "libro17.jpg",
        },
        {
          id: 13,
          rating: 4,
          title: "Mistborn: The Well Of Ascension",
          image: "libro18.jpg",
        },
        {
          id: 14,
          rating: 5,
          title: "Mistborn: The Hero Of Ages",
          image: "libro19.jpg",
        },
      ],

      copyBooks: [],
    };
  }
  /*EMPEZAMOS CON EL SEARCH*/
  componentDidMount() {
    this.initBooks();
  }

  initBooks = () => {
    //initBooks configura el copybooks, es decir despues de terminar cada evento como agregar, eliminar. Llamamos a initBooks para que guarde ese nuevo arreglo en books y este predeterminado con el libro añadido o eliminado
    this.setState((state, props) => ({
      copyBooks: [...state.books],
    }));
  };

  //Agregar libro
  onAdd = (dataBook) => {
    let arrayTemporal = [...this.state.books]; //Hago una copia de los books
    const id = arrayTemporal[arrayTemporal.length - 1].id + 1; //Necesito sacar el ultimo id que tiene mi arreglo. el -1 es para que me de el indice del ultimo elemento y de ahi crearemos el nuevo id. Por ejemplo: el proximo id es el 05 pero esta en la posicion/indice 6, por eso el -1
    dataBook["id"] = id; //Asiganamos el nuevo id a ese dataBook (que en principio no lo tiene, porque solo se envia el title, image y rating)
    arrayTemporal.push(dataBook); //Hacemos el push para insertar todo el elemento en el arrayTemporal que tiene todos los libros.

    //Ahora a ese arrayTemporal lo pasamos finalmente al state de books de la linea 11
    this.setState({ books: [...arrayTemporal] });

    this.initBooks(); //Para que termine haciendo la copia al agregar
  };

  //Busqueda de libro
  onSearch = (query) => {
    if (query === "") {
      //si no contiene texto
      this.initBooks();
    } else {
      //si contiene texto
      const temp = [...this.state.books]; //crear un arreglo temporal de mis libros
      let res = []; //creamos otro arreglo temporal que es el que devolvemos a la pagina

      temp.forEach((item) => {
        //por cada parametro item(es un elemento un objeto) (item sera el array con objetos)
        if (item.title.toLowerCase().indexOf(query) > -1) {
          //si el item    .Transformo a minuscula()    .busca la coincidencia, si es mayor a -1
          res.push(item); //el resultado lo agrego a mi arreglo de res
        }
      });

      this.setState({ copyBooks: [...res] }); //A ese copybooks le agregamos ese res ---- Ademas usamos el copybooks porque es copybooks el que vamos a manipular.
    }
  };

  onUpdateRating = (item) => {
    let temp = [...this.state.books];
    const index = temp.findIndex((x) => x.id == item.id);

    temp[index].title = item.title;
    temp[index].image = item.image;
    temp[index].rating = item.rating;

    this.setState({ books: [...temp] });
    this.initBooks();
  };

  //Eliminar libro
  onRemove = (id) => {
    let temp = [...this.state.books];
    const res = temp.filter((item) => item.id != id); //Con filter es para que devuelva todos los elementos del copybooks (que serian la x) que son diferentes al item.id (que es el id del item al que le estamos dando click a eliminar)

    this.setState({ books: [...res] });
    this.initBooks();
  };

  render() {
    return (
      <div className="app">
        <Menu title="Bookshop" onadd={this.onAdd} onsearchApp={this.onSearch} />
        <List
          items={this.state.copyBooks}
          onupdateratingApp={this.onUpdateRating}
          onremoveApp={this.onRemove}
        />
        <Footer />
      </div>
    );
  }
}

export default App;

import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
    // console.log("constructor");
  }

  componentDidMount() {
    // console.log("didMount");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChnage = (event) => {
  // casting search input into lowercase
  const searchField = event.target.value.toLocaleLowerCase();
  this.setState(() => {
    return { searchField };
  });
};



  render() {
    // console.log("render");
    const {monsters, searchField} = this.state;
    const {onSearchChnage} = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (

      <div className="App">
        <>
        <SearchBox onChangeHandler={onSearchChnage} placeholder="search monsters" className='monsters-search-box'/>
        <CardList monsters={filteredMonsters}/>
        </>
      </div>
    );
  }
}

export default App;

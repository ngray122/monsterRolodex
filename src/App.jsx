import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { useState, useEffect } from "react";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChnage = (event) => {
    // casting search input into lowercase
    const searchFieldString = event.target.value.toLocaleLowerCase();
    console.log(searchField);
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <>
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChnage}
          placeholder="search monsters"
          className="monsters-search-box"
        />
        <CardList monsters={filteredMonsters} />
      </>
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//   componentDidMount() {
//     // console.log("didMount");

//   render() {
//     // console.log("render");
//     const { monsters, searchField } = this.state;
//     const { onSearchChnage } = this;

//     return (

//     );
//   }
// }

export default App;

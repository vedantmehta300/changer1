import React, { Component, Children } from "react";
import Person from "./Person";
import { Button } from "@material-ui/core";
import "./App.css";

class App extends Component {
  state = {
    Persons: [
      { id: "kgh", name: "Rahul", age: "24" },
      { id: "tmh,", name: "Kiran", age: "25" },
      { id: "tym", name: "horny", age: "65" },
    ],
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.Persons];
    persons.splice(personIndex, 1);
    this.setState({
      Persons: persons,
    });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.Persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.Persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.Persons];
    persons[personIndex] = person;
    this.setState({
      Persons: persons,
    });
  };
  changer = () => {
    this.setState({
      Persons: [
        { name: "karan", age: "24" },
        { name: "ashvin", age: "25" },
        { name: "dishant", age: "65" },
      ],
    });
  };

  render() {
    let style = [];
    if (this.state.Persons.length <= 1) {
      style.push("red");
    }

    if (this.state.Persons.length > 1) {
      style.push("bold");
    }

    if (this.state.Persons.length > 2) {
      style.push("um");
    }
    return (
      <>
        <div className="mainer">
          <div className={style.join("")}>
            <h1>Hello I am the react app</h1>
            <p>This is really working!!!!</p>
          </div>
        </div>

        <Button
          style={{ marginLeft: "46%", marginBottom: "1%" }}
          variant="contained"
          color="secondary"
          onClick={() => this.changer()}
        >
          click Here
        </Button>

        <div>
          {this.state.Persons.map((number, index) => (
            <Person
              clicked={() => this.deletePersonHandler(index)}
              style={{ margin: "10%", background: "yellow" }}
              name={number.name}
              age={number.age}
              key={number.id}
              changed={(event) => this.nameChangeHandler(event, number.id)}
            />
          ))}
          ;
        </div>
      </>
    );
  }
}

export default App;

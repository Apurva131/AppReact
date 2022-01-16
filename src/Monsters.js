import React, { Component } from "react";

class Monsters extends Component {
  constructor() {
    super();
    this.state = {
      monsters: "These are State values:",
      newMonsters: [
        {
          name: "Apurva",
          id: 13
        },
        {
          name: "Yash",
          id: 6
        }
      ]
    };
  }
  render() {
    return (
      <div className="app">
        <h4>{this.state.monsters}</h4>
        {this.state.newMonsters.map((monster) => (
          <h5 key={monster.id}> {monster.name}</h5>
        ))}
      </div>
    );
  }
}

export default Monsters;

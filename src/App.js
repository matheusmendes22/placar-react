import React, { Component } from "react";
import "./App.css";
import Pontuacao from "./Pontuacao";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time1: this.updateInputValue,
      time2: this.updateInputValue1,
      placar1: 0,
      placar2: 0
    };
  }

  reiniciar = () => {
    this.setState({
      time1: "Time da Casa ",
      time2: "Time  Visitante ",
      placar1: 0,
      placar2: 0
    });
  };

  incrementar = time => {
    let novoState = {};
    novoState[`placar${time}`] = this.state[`placar${time}`] + 1;
    this.setState(novoState);
  };

  render() {
    return (
      <div>
        <div className="placar">
          <Pontuacao
            cliqueBotao={this.incrementar}
            nomeDoTime={this.state.time1}
            gols={this.state.placar1}
            numero="1"
          />
          X
          <Pontuacao
            cliqueBotao={this.incrementar}
            nomeDoTime={this.state.time2}
            gols={this.state.placar2}
            numero="2"
            visitante="true"
          />
        </div>
        <div className="controles">
          <label>Time da casa</label>
          <input
            value={this.state.time1}
            onChange={this.updateInputValue}
            type="text"
            placeholder="Digite o nome do time da casa"
          />
          <label>Time visitante</label>
          <input
            value={this.state.time2}
            onChange={this.updateInputValue1}
            type="text"
            placeholder="Digite o nome do time visitante"
          />
          <button onClick={this.reiniciar}>Reiniciar</button>
        </div>
      </div>
    );
  }

  updateInputValue = evt => {
    this.setState({
      time1: evt.target.value
    });
  };
  updateInputValue1 = evt => {
    this.setState({
      time2: evt.target.value
    });
  };
}

export default App;

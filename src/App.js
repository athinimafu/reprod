import React from "react";
import AppState from "./renderer.js";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = { code:'',response:'' }
        this.transpileCode = this.transpileCode.bind(this);
        this.updateCode = this.updateCode.bind(this);
    }

    async transpileCode() {
      let transpiledCode = '';
      try {
        transpiledCode = await AppState.updateCode(this.state.code);
      }
      catch(e) {
        transpiledCode = e;
      }
      this.setState({ response:transpiledCode });
    }

    async updateCode(e) {
      this.setState({ code:e.target.value });
    }

    render() {
        return (
            <div className="component">
              <div className="left-frame">
                <h3> Write your code here. </h3>
                <textarea  value={ this.state.code } onInput={ this.updateCode } />
                <button onClick={ this.transpileCode } > transpile code </button>
              </div>
              <div className="right-frame"> { this.state.response } </div>
            </div>
        );
    }
}

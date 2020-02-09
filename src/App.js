import React, {Component} from 'react';
import './App.css'
import {connect} from 'react-redux'

class App extends Component {
  
  decrement = () => {
    this.props.dispatch({type:'DECREMENT'})
  }

  increment = () => {
    this.props.dispatch({type:'INCREMENT'})
  }

  render() {
    return(
      <div className = "card">
        <div className = "bodya">
        <p>Counter App</p>
        <div className = "buts">
        <button className="waves-effect waves-light btn-small" id ="bt1"  onClick = {this.decrement}>-</button>
        <span>{this.props.count}</span>
        <button className="waves-effect waves-light btn-small" id ="bt2" onClick = {this.increment}>+</button>
      </div>
      </div>
      </div>
    )
  }
  
}

function stateToProps(state) {
  return {
    count:state.count
  }
}
export default connect(stateToProps)(App);

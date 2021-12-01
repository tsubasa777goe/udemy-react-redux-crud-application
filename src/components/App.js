import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement} from '../actions'

class App extends Component {
  // constructor(props){
  //   super(props)
  //   console.log(this.state)
  //   this.state = { count: 0 }
  // }

  // handlePlusButton = () => {
  //   console.log("handlePlusButton")
  //   console.log(this.state.count)
  //   this.setState({ count: this.state.count + 1})
  // }

  // handleMinusButton = () => {
  //   console.log("handleMinusButton")
  //   console.log(this.state.count)
  //   this.setState({ count: this.state.count - 1})
  // }

  render(){
    const props = this.props

    return (
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>+1</button>
      </React.Fragment>
      )
  }

}

const mapStateToProps = state => ({ value: state.count.value })
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

export default connect (mapStateToProps, mapDispatchToProps)(App);

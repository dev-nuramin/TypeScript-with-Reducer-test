
// type script if you use typescript then you have to use like this
import React, { Component } from 'react'
React
type Props = {
  title? : string,
  desc? : string,
}

type State = {
  count: number
}
export class ClassCounter extends Component<Props, State> {

  constructor(props: Props){
    super(props)
    this.state = {count: 0}
  }

   handleIncrement = () => {
     this.setState((prevState) => ({count: prevState.count + 1}))
  }

 handleDecrement = () => {
     this.setState((prevState) => ({count: prevState.count - 1}))
  }
 handleReset = () => {
     this.setState({count: 0});
  }
  render() {
    
    return (
      <>
      <h1>{this.state.count}</h1>
      <hr />
      <button onClick={this.handleDecrement}>--</button>&nbsp;
      <button onClick={this.handleIncrement}>++</button>&nbsp;
      <button onClick={this.handleReset}>Reset</button>
      </>
    )
  }
}

export default ClassCounter;
import React from 'react'

class NewComp extends React.Component {
    constructor(props) {
        super();
        this.state = {
            id: 1,
            value: "blah"
        }
    }
  render() {
    return (
      <div>
        <h1>Hello, my name is {this.props.name} </h1>
        <p>This is my id: {this.state.id} and this is the value: {this.state.value}</p>
        <button onClick={this.newfunc}>Click Me</button>
      </div>
    )
  }

  newfunc =() => {console.log("I am here");
  this.setState({value: "new value"});
  }
}

export default NewComp;
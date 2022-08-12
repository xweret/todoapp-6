import React, { Component } from 'react'

export class App extends Component {

// creo el constructor 

constructor(props){
  super(props);
  this.state = {
    newItem: "",
    list: []
  }
}

updateInput(key, value){
  this.setState({
    [key]: value
  })
}

addItem(){
  const newItem = {
    id: 1 + Math.random(),
    value: this.state.newItem.slice()
  };

  const list = [...this.state.list]
  list.push(newItem)
  this.setState({
    list,
    newItem:""
  })

  }



  render() {
    return (
      <div>

      Add an item to the list...

      <br/>
      <input
      type='text'
      placeholder='agregar a la lista'
      value={this.state.newItem}
      onChange= {e =>this.updateInput('newItem', e.target.value)}
      />
      <button
      onClick={()=> this.addItem()}
      > Agregar </button>
      
      </div>
    )
  }
}

export default App

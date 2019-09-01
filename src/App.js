import React, { Component } from 'react';
import './App.css';
import TodoItems from './comps/Todo-items/Todo-items'
import AddItems from './comps/Add-item/Add-item'
class App extends Component {
  state = {
    items : [
    {id:1 , name: "Hamza" , age: 22 },
    {id:2 , name: "Mohamed" , age: 23 },
    {id:3 , name: "Abdulrhman" , age: 24 }
  ]
  }
deleteItem = (id) => {
  let {items} = this.state
  items = items.filter( u=> {
    return u.id !== id
  })
  this.setState({
    items

})
}
addItem = (item) => {
  let {items} = this.state;
  items.push(item)
  this.setState ( {
    items
  })
}
  render() {
    return (
      <div className="App container">
<h1 className="text-center">Todo app</h1>
<TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
<AddItems addItem = {this.addItem}/>
      </div>
    );
  }
    }
export default App;

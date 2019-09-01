import React , {Component} from 'react';
import './Add-item.css'
class AddItems extends Component {
  state = {
    name : "",
    age : "",
    id : null
  }
  handleChange = (e) => {
this.setState( {
  [e.target.id] : e.target.value
})
}
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      id : Math.random()
    })
    if(this.state.name != "" && this.state.age != null){
    this.props.addItem(this.state)
    this.setState({
      id: "",
      name : "" ,
      age : ""
    })
  }else {
alert("you must enter a valid data !!")
  }
  }
  render () {
    return (
<div>
  <form onSubmit={this.handleSubmit}>
    <input type="text" placeholder="Enter Name.." id="name" onChange={this.handleChange} value={this.state.name}/>
    <input type="number" placeholder="Enter age.." id="age" onChange={this.handleChange} value={this.state.age}/>
    <input type="submit" value="Add"/>
  </form>
</div>
    )
  }
}
export default AddItems

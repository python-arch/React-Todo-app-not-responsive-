import React from 'react'
import './Todo-items.css'
const TodoItems = (props) => {
  const {items, deleteItem} = props;
  const length = items.length;
  const itemsMap =
length > 0 ? (
  items.map( u=> {
    return (
      <div key={u.id}>
<span className="name">{u.name}</span>
<span className="age">{u.age}</span>
<span onClick={() => deleteItem(u.id)} className="action icon">&times;</span>
      </div>
    )
  })
) :  (
  <p>There is not items to show</p>
)
  return (
    <div className="listItems">
    <div>
    <span className="title name">Name</span>
    <span className="title age">Age</span>
    <span className="title action">Action</span>
    </div>
{itemsMap}
    </div>
  )
}
export default TodoItems

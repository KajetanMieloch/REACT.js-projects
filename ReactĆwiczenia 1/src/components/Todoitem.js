import React from "react"

const TodoItem = props => {
   return <div className={`card ${props.element.isComplated ? 'complated' : ''}`} key={props.element.id}>
        <h2>{props.element.title}</h2>
        <button onClick={() => props.markClicked(props.element.id)}>Zakończone</button>
   </div>
} 

export default TodoItem
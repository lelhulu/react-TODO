import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("") 
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value)
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='Todo-input' placeholder='Add your tasks:' onChange={(e) => setValue(e.target.value)} />
        <button type='submit' className='todo-button'>Add task</button>
    </form>
  )
}

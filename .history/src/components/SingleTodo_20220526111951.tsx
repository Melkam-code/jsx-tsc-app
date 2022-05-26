import React from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import './styles.css'

interface Props {
   todo: Todo;
   todos: Todo[];
   setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos}: Props) => {
  const handleDone = (id: number) => {
      setTodos(todos.map((todo) => todo.id === id ? {...todo, isDone: !todo.isDone} : todo))
  }

  return (
    <form className='single_todo'>
      {todo.isDone ? <s className="single_text">{todo.todo}</s> :
      <span className="single_text">{todo.todo}</span>} 
       <div>
         <span className="icon"><AiFillEdit /></span>
         <span className="icon"><AiFillDelete /></span>
         <span className="icon" onClick={() => handleDone(todo.id)}><MdDone /></span>
       </div>
    </form>
  )
}

export default SingleTodo
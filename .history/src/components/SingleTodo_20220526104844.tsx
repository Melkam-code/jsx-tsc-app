import React from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete, IoMdDoneAll } from 'react-icons/ai'

interface Props {
   todo: Todo;
   todos: Todo[];
   setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos}: Props) => {
  return (
    <form className='single_todo'>
       <span className="single_text">{todo.todo}</span>
       <div>
         <icon className="icon"><AiFillEdit /></icon>
         <icon className="icon"><AiFillDelete /></icon>
         <icon className="icon"><IoMdDoneAll /></icon>
       </div>
    </form>
  )
}

export default SingleTodo
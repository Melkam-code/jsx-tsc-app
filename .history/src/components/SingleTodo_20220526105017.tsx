import React from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import {MdDone} from 'react-icons/md'

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
         <icon className="icon"><MdDone /></icon>
       </div>
    </form>
  )
}

export default SingleTodo
import React from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-spans/ai'
import {MdDone} from 'react-spans/md'

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
         <span className="icon"><AiFillEdit /></span>
         <span className="icon"><AiFillDelete /></span>
         <span className="icon"><MdDone /></span>
       </div>
    </form>
  )
}

export default SingleTodo
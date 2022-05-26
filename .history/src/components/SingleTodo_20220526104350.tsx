import React from 'react'
import { Todo } from '../model'

interface Props {
   todo: Todo;
   todos: Todo[];
   setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos}: Props) => {
  return (
    <form className='single_todo'>
       <span className="single_text">{todo.todo}</span>
    </form>
  )
}

export default SingleTodo
import React, { useState } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id: number, e: React.FormEvent) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? {...todo, todo: editTodo} : todo))
      );
  }

  return (
    <form className="single_todo" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? <input value={editTodo} className='single_todo_edit' onChange={(e) => setEditTodo(e.target.value)} /> 
      : todo.isDone ? (
        <s className="single_text">{todo.todo}</s>
      ) : (
        <span className="single_text">{todo.todo}</span>
      )}
      <div>
        <span className="icon" onClick={() => {if(!edit && !todo.isDone){ 
          setEdit(!edit); } }}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;

import React from 'react';
import './styles.css';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: () => void;
}

export const InputField = ({ todo, setTodo, handleAdd }: Props) => {
    console.log('TODO', todo);
  return (
    <form className='input'>
        <input type='input' value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='Enter a task' className='input_box' />
        <button className='input_submit' onClick={handleAdd}>Go</button>
    </form>
  )
}

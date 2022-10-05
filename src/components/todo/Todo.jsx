import React from "react";
import './style.css';

const Todo = ({ todo, onChange, onRemove }) => {
    return (
        <div className="todo">
            <div className='w1'>
                <div>
                    <h2>{todo.title}</h2>
                    <p>{todo.body}</p>
                </div>
                <div>
                    <button className='btns1' onClick={() => {
                        onRemove(todo)
                    }}>삭제</button>

                    <button className='btns2' onClick={() => {
                        todo.isDone = !todo.isDone
                        onChange(todo)
                    }}
                    >{todo.isDone === true ? '취소' : '완료'}</button>

                </div>
            </div>
        </div>
    )
}
export default Todo;

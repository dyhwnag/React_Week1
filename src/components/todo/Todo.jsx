import React, { useState } from "react";
import './style.css';

const Todo = ({ todo, onChange, onRemove }) => {
    const [isDone, setIsDone] = useState(todo.isDone)

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
                        setIsDone(!isDone)
                        // Todo 컴포넌트는 isDone 상태를 가지고, isDone 상태가 변경되면 자동으로 다시 렌더링
                        // !isDone으로 뒤집어서 넣기(state에 isDone)

                        todo.isDone = !isDone // todo객체의 isDone을 반대로
                        onChange(todo)//Layout 컴포넌트에 있는 onChangeHandler 호출
                    }}
                    >{isDone === true ? '취소' : '완료'}</button>
                </div>
            </div>
        </div>
    )
}
export default Todo;
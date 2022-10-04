import React from "react";
import Todo from '../todo/Todo'
import './style.css';

const List = ({ todos, onChange, onRemove }) => {

    return (
        <div className="wrap">
            {/*map() 배열 함수로 데이터 전달 강의자료 참고함*/}
            {/*isDone === false*/}
            <div><h2>Working🔥</h2></div>
            <div className="list">
                {todos.map((todo) => {
                    if (todo.isDone === false) {
                        // Todo컴포넌트로 필요 함수들과 데이터 전달 *map()배열 함수로 데이터 전달시 키값 필수*
                        return <Todo key={todo.id} todo={todo} onChange={onChange} onRemove={onRemove} />
                    } else {
                        return null
                    }
                })}
            </div>
            {/*isDone === true*/}
            <div><h2>Done🎉</h2></div>
            <div className="list">
                {todos.map((todo) => {
                    if (todo.isDone === true) {
                        // Todo컴포넌트로 필요 함수들과 데이터 전달 *map()배열 함수로 데이터 전달시 키값 필수*
                        return <Todo key={todo.id} todo={todo} onChange={onChange} onRemove={onRemove} />
                    }
                    else {
                        return null
                    }
                })}
            </div>
        </div>
    )
}
export default List;
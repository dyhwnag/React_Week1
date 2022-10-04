import React, { useState } from "react";
import List from "../list/List";
import Form from "../form/Form";
import Header from "../header/Header";
import './style.css';

const Layout = () => {

    const [todos, setTodos] = useState([
        { id: 1, title: "리액트 공부", body: "너무 어렵다", isDone: false },
        { id: 2, title: "HTML 공부", body: "HTML을 공부해보자", isDone: false },
        { id: 3, title: "자바스크립트 공부", body: "자바스크립트를 공부해보자", isDone: true },
        { id: 4, title: "CSS 공부", body: "CSS를 공부해보자", isDone: true }
    ]);

    const onSubmitHandler = (todo) => {
        let maxId = todos.reduce((pre, cur) => { // todos id 최대값 구하기
            return pre.id > cur.id ? pre.id : cur.id
        })
        todo.id = maxId + 1 // 최대값 + 1을 id 값으로 선언
        let addTods = [...todos, todo]// 스프레드 연산자로 기존 객체와 Form 컴포넌트에서 todo로 받아온 객체랑 합침
        setTodos(addTods)// setTodos함수로 변경된 값 반영
    }

    const onChangeHandler = (todo) => { // 완료, 취소
        let newTodos = todos.filter((todos) => { // todos와 넘겨받은 todo의 id가 같지않은 친구들 새로운 배열로 반환
            return todos.id !== todo.id
        })
        newTodos.push(todo)// 넘겨받은 객체도 push(변경된 isDone)
        setTodos(newTodos)// 필터로 반환된 newTods 데이터를 todos 객체로 변환
    }

    const onRemoveHandler = (todo) => { // 삭제
        let removeTodos = todos.filter((todos) => { // todos객체와 넘겨받은 todo의 id가 같지않은 친구들 새로운 배열로 반환
            return todos.id !== todo.id
        })
        setTodos(removeTodos)// 반환된 removeTodos 데이터를 todos 객체로 변환해주면 삭제기능 표현 가능함
    }

    return (
        <div>
            <Header />
            <Form onSubmit={onSubmitHandler} /> {/*onSubmitHandler를 onSubmit이라는 이름으로 form 컴포넌트로 전달*/}
            <List todos={todos} onChange={onChangeHandler} onRemove={onRemoveHandler} /> {/*todos 객체, onChangeHandler 함수, onRemoveHandler 함수 전달*/}
        </div>
    )
}
export default Layout;
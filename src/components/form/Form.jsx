import React, { useState } from "react";
import './style.css';

const Form = ({ onSubmit }) => {
    const [inputTitle, setInputTitle] = useState('') //글제목 스테이트 생성
    const [inputDescription, setInputDescription] = useState('') //글내용 스테이트 생성

    return (
        <div className="form">
            <div>
                <label className='label'>제목</label>
                <input value={inputTitle} type='text' onChange={(e) =>
                    setInputTitle(e.target.value)
                } />
            </div>
            <div>
                <label className='label'>내용</label>
                <input value={inputDescription} type='text' onChange={(e) =>
                    setInputDescription(e.target.value)
                } />
            </div>
            <div>
                <button className='btn' onClick={() => {
                    setInputTitle('')
                    setInputDescription('')
                    let todo = {
                        id: 0,
                        title: inputTitle,
                        body: inputDescription,
                        isDone: false
                    }
                    onSubmit(todo)
                }
                }> 추가하기 </button>
            </div>

        </div>
    )
}
export default Form;

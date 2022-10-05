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
                {/* todo라는 객체를 하나 선언하고 
                    추가하기 버튼 클릭시 props.onSubmit(todo) = Layout 컴포넌트의 onSubmitHandler 호출(객체 todo를 매개변수로 담아서 전달)
                    id는 나중에 Layout 컴포넌트 onSubmitHandler 함수에서 id 최대값으로 정의함 */}
            </div>

        </div>
    )
}
export default Form;

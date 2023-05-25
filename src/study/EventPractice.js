import React, { useState } from "react";

const EventPractice = () => {
    // const [username, setUsername] = useState("");
    // const [message, setMessage] = useState("");

    const [form, setForm] = useState(
        {
            username:"",
            message:""
        }
    )

    const {username, message} = form;

    // const onChangeUsername = (e) => {setUsername(e.target.value)}
    // const onChangeMessage = (e) => {setMessage(e.target.value)}
    const onChange = (e) => {
        console.log(1, e.target.name) // username, message
        console.log(2, e.target.value)

        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        }

        console.log(3, nextForm)
        setForm(nextForm)
    }

    const onClick = () => {
        alert(username + message)
        setForm({
            username: "",
            message: ""
        })
    }

    const onKeyDown = (e) => {
        if(e.key === "Enter") {
            onClick();
        }
    }

    return (
        <div>
            <h1>이벤트</h1>
            <input 
                onChange={onChange} 
                value={username}
                type="text" 
                name="username" 
                placeholder="유저이름"
            />
            <input 
                onKeyDown={onKeyDown}
                onChange={onChange} 
                value={message}
                type="text" 
                name="message" 
                placeholder="아무거나" 
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
}; 

export default EventPractice;

import React, { useState } from 'react';
import UserIcon from './svg/user-solid.svg'
import KeyIcon from './svg/key-solid.svg'
import MailIcon from './svg/envelope-solid.svg';



const Form = () => {

    const [showPass, setShowPass] = useState(false);

    const [inputField, setInputField] = useState({
        name: "",
        email: "",
        password: ""
    });


    const inpuntEvent = (e) => {

        const { name, value } = e.target;

        setInputField((oldValue) => {
            // console.log(oldValue)

            return {
                ...oldValue, [name]: value,
            }
        })
    }


    const onSubmit = (e) => {
        e.preventDefault();
        setInputField(inputField)
    }


    return (
        <div className="container">
            <div className="box">
                <h3>Form Details</h3>
                <ul>
                    <li>{inputField.name}</li>
                    <li>{inputField.email}</li>
                    <li>{inputField.password}</li>
                </ul>
            </div>
            <div className="box">
                <h2>Register Form</h2>
                <form autoComplete="off" onSubmit={onSubmit} >
                    <div className="input-field">
                        <img src={UserIcon} alt="user" width='20' className="icon" />
                        <input onChange={inpuntEvent} value={inputField.name} type="text" placeholder="Username" name="name" />
                    </div>
                    <div className="input-field">
                        <img src={MailIcon} alt="email" width='20' className="icon" />
                        <input onChange={inpuntEvent} value={inputField.email} type="email" placeholder="Email" name="email" />
                    </div>
                    <div className="input-field">
                        <img src={KeyIcon} alt="pass" width='20' className="icon" onClick={() => setShowPass(!showPass)} />
                        <input onChange={inpuntEvent} value={inputField.password} type={showPass ? 'password' : 'text'} placeholder="Password" name="password" />
                    </div>
                    <div className="check-box">
                        <label htmlFor="abc">
                            <input type="checkbox" id="abc" /><span>Remember Me</span>
                        </label>
                    </div>
                    <button type="submit" className="btn">Sign Up</button>
                    <div className="form-footer">
                        <p>If you have an account? Sign In</p>
                        <p>Forget Password?</p>
                    </div>
                </form>
            </div>

        </div>

    )
}

export default Form

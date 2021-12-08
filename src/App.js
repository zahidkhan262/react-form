import React, { useState } from 'react'
import './App.css';
import Form from './Form';
function App() {

  const [showPass, setShowPass] = useState(false);

  const [inputField, setInputField] = useState({
    name: "",
    email: "",
    password: ""
  });


  return (
    <>
      <Form showPass={showPass} setShowPass={setShowPass} inputField={inputField} setInputField={setInputField} />
    </>
  );
}

export default App;

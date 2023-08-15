import { useState } from "react";
import Form from "./components/Form"
import axios from "axios";

function Register(){

    const [newUser,setNewUser] = useState({username: "", password: "", email: "", notification: false})

    const [success, setSuccess] = useState(false)

    const [error, setError] = useState(false)

    const disableSubmit = !newUser.username || !newUser.password || !newUser.email

    const handleChange = (event)=>{
        const property = event.target.id
        const value = event.target.value
        setNewUser({...newUser, [property]: value})
        if(success) setSuccess(false)
    }

    const handleCheck = (event)=>{
        setNewUser({...newUser, notification: event.target.checked})
    }

    
    const handleSubmit = (event)=>{
        event.preventDefault()

        axios({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/posts"
        }).then(
            response => {
                setSuccess(true)
                setNewUser({username: "", password: "", email: "", notification: false})
            }
        ).catch(
            error=>{
                setError(error)
            }
        )
    }

    return(
        <Form 
            newUser={newUser} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
            handleCheck={handleCheck} 
            disableSubmit={disableSubmit}
            success={success}
            error={error}
        />
    )
}

export default Register;
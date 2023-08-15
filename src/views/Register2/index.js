import { useState } from "react";
import Form from "./components/Form"
import axios from "axios";

function Register2(){

    const [newUser,setNewUser] = useState({nombre: "", apellido: "", correo: "", telefono:"",  notification: false})

    const [success, setSuccess] = useState(false)

    const [error, setError] = useState(false)

    const disableSubmit = !newUser.nombre || !newUser.apellido || !newUser.correo || !newUser.telefono

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
            url: "http://localhost/pin/public/index.php/api/registrar-cliente"
        }).then(
            response => {
                setSuccess(true)
                setNewUser({nombre: "", apellido: "", correo: "", telefono:"", notification: false})
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

export default Register2;
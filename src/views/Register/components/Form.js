import './style.css'

function Form(props) {
    return (
        <>
            <section className='contenedor-section'>
                <form onSubmit={props.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            onChange={props.handleChange}
                            value={props.newUser.email}
                        />
                        <div id="emailHelp" className="form-text">
                            Nunca compartiremos su correo electrónico con nadie.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Nombre
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            aria-describedby="emailHelp"
                            onChange={props.handleChange}
                            value={props.newUser.username}
                        />

                    </div>

                    <div className="mb-3">
                        <label htmlFor="apellido" className="form-label">
                            Apellido
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="apellido"
                            aria-describedby="emailHelp"
                            onChange={props.handleChange}
                            value={props.newUser.username}
                        />

                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            onChange={props.handleChange}
                            value={props.newUser.password}
                        />
                    </div>
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                            onChange={props.handleCheck}
                            checked={props.newUser.notification}
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">Enviarme novedades al email.</label>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={props.disableSubmit}>
                        Submit
                    </button>
                </form>
                {props.success &&
                    <div className="alert alert-success m-3" role="alert">
                        ¡Tu solicitud fue recibida con exito!
                    </div>}
                {props.error &&
                    <div className="alert alert-danger m-3" role="alert">
                        ¡Tuvimos un problema al procesar tu solicitud!
                    </div>}
            </section>
        </>
    )
}

export default Form;
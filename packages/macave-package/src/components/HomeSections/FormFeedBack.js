import React, {useState, useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'

const FormFeedBack = () => {
  return (
    <div className='container'>
        <br></br>
        <h1>Dejanos un comentario</h1>
        <br></br>

        <form autoComplete='off' className='form-group'>
            <label>Nombre: </label>
            <input
                type = 'text'
                placeholder='Escribe tu nombre'
                required
                className='form-control'
            />
            <br></br>
            <label>Correo: </label>
            <input
                type = 'text'
                placeholder='Escribe tu correo'
                required
                className='form-control'
            />
            <br></br>
            <label>Dejamos un comentario: </label>
            <input
                type = 'text'
                placeholder=''
                required
                className='form-control'
            />
            <br></br>
            <div style={{display: 'flex',justifyContent: 'flex-end'}}>
                <button type = 'submit' className = 'btn btn-primary'>Enviar</button>
            </div>

        </form>

    </div>
  )
}

export default FormFeedBack
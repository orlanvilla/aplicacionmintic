import { useState } from 'react'
import './login.css'
import logo from '../../img/logo.png'
import ModalRegistro from './ModalRegistro';
import swal from 'sweetalert'

const Login = () => {

    const [modal, setModal] = useState(false);

    const handleAbrirModalRegistro=(e)=>{
        
        setModal(true)
        return
    }
  return (
    <div className='contenedor-login'>
        
        <div className='contenido-login'>
            <div className='logo'>
                <img
                    src={logo}
                />
            </div>
            <h2>Iniciar Sesión</h2>
            <div class="form">
                <input type="text" id="email" className="form-input" autocomplete="off" placeholder=" "/>
                <label htmlFor="email" class="form__label">Usuario</label>
            </div>
            <div class="form">
                <input type="password" id="contrasena" className="form-input" autocomplete="off" placeholder=" "/>
                <label htmlFor="contrasena" class="form__label">Contraseña</label>
            </div>

            <div className='btn-ingresar'>
                <input                    
                    type="submit"
                    value="Ingresar"
                />            
            </div>
            <nav className='nav-registro'>
                <a
                onClick={handleAbrirModalRegistro}
                >Regístrate aquí</a>
            </nav>

        </div>
        {modal&& <ModalRegistro
                    setModal={setModal}
        />}
      
    </div>
  )
}

export default Login

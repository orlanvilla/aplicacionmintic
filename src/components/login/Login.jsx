import './login.css'
import logo from '../../img/logo.png'
const Login = () => {
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

        </div>
      
    </div>
  )
}

export default Login

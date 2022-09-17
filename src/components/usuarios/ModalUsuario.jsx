import './modalUsuario.css'  
import icono_cerrar from '../../img/cerrar.svg'

const ModalUsuario= ({setModal}) => { 

    const handleCerrar=(e)=>{
        e.preventDefault();
        setModal(false);
    }
    
  return (
    <div className='contenedor-modalingresos'>
        <div className='cerrar-modal'>
            <img
                src={icono_cerrar}
                alt="icono-cerrar"  
                onClick={handleCerrar}            
            />

        </div>
        <div className='contenido-ingresos'>       
            <h1>Empleado</h1>
                <form className='formulario-ingresos'>
                    <label>Nombre</label>
                    <input
                        type="text"
                     
                    />
                    <label>Email</label>
                    <input
                        type="text"
                     
                    />
                    <label>Rol</label>
                    <input
                        type="text"                      
                    />
                    <label>Teléfono</label>
                    <input
                        type="text"                      
                    />
                    <div className='input-ingreso'>
                    <input                        
                        type="submit"
                        value="Añadir"                       
                    />
                    </div>

                    
                </form>
        </div>
    </div>
  )
}

export default ModalUsuario

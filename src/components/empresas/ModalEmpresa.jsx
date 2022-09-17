import './modalEmpresa.css' 
import icono_cerrar from '../../img/cerrar.svg'


const ModalEmpresa= ({setModal}) => { 
    
    const handleCerrarModal=(e)=>{
        e.preventDefault();
        setModal(false)
    }
  return (
    <div className='contenedor-modalempresa'>
        <div className='cerrar-modal'>
            <img
                src={icono_cerrar}
                alt="icono-cerrar"   
                onClick={handleCerrarModal}           
            />

        </div>
        <div className='contenido-empresa'>       
            <h1>Información de la Empresa</h1>
                <form className='formulario-empresa'>
                    <label>Nombre</label>
                    <input
                        type="text"
                     
                    />
                    <label>Dirección</label>
                    <input
                        type="text"
                     
                    />
                    <label>Teléfono</label>
                    <input
                        type="text"                      
                    />
                    <label>Tipo</label>
                    <input
                        type="text"                      
                    />
                    <div className='input-empresa'>
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

export default ModalEmpresa

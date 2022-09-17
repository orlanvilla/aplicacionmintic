import './modalIngresos.css' 
import { useState } from 'react'
import icono_cerrar from '../../img/cerrar.svg'
import Mensaje from '../mensaje/Mensaje';
import { FormatoMoneda } from '../../helpers/helpers';

const ModalIngresos = ({setModal, guardarIngresos}) => {
    const [monto, setMonto] = useState(0);
    const [concepto, setConcepto] = useState("");
    const [fecha, setFecha] = useState("");
    const [mensaje, setMensaje] = useState(false);

    const handleCerrar=(e)=>{
        e.preventDefault();
        setModal(false)
    }

    const handleAñadir=(e)=>{
        e.preventDefault();
        if([monto, concepto, fecha].includes("")){
            setMensaje(true)
            setTimeout(() => {
                setMensaje(false)
            }, 2000);
            return
        }
        guardarIngresos({monto, concepto, fecha})
        

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
            <h1>Nuevo Ingreso</h1>
                <form className='formulario-ingresos'>
                    <label>Monto</label>
                    <input
                        type="number"
                        value={monto}
                        onChange={e=>setMonto(Number(e.target.value))}
                    />
                    <label>Concepto</label>
                    <input
                        type="String"
                        value={concepto}
                        onChange={e=>setConcepto(e.target.value)}
                    />
                    <label>Fecha</label>
                    <input
                        type="date"
                        value={fecha}
                        onChange={e=>setFecha(e.target.value)}
                    />
                                        <div className='input-ingreso'>
                    <input                        
                        type="submit"
                        value="Añadir"
                        onClick={handleAñadir}
                    />
                    </div>

                    {mensaje && <Mensaje>
                        <p>Todos los campos son obligatorios</p>
                    </Mensaje>}
                    
                </form>
        </div>
    </div>
  )
}

export default ModalIngresos

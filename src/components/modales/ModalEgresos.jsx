import './modalEgresos.css'
import { useState } from 'react'
import icono_cerrar from '../../img/cerrar.svg'
import Mensaje from '../mensaje/Mensaje';

const ModalEgresos = ({setModal, guardarEgresos}) => {
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
        guardarEgresos({monto, concepto, fecha})
        

    }
  return (
    <div className='contenedor-modalegresos'>
        <div className='cerrar-modal'>
            <img
                src={icono_cerrar}
                alt="icono-cerrar"
                onClick={handleCerrar}
            />

        </div>
        <div className='contenido-egresos'>       
            <h1>Nuevo Egreso</h1>
                <form className='formulario-egresos'>
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
                    <div className='input-egreso'>
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

export default ModalEgresos

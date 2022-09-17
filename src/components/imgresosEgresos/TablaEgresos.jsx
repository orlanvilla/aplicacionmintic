import {useEffect, useState} from 'react'
import ModalEgresos from '../modales/ModalEgresos';
import './tablaEgresos.css'
import { FormatoMoneda } from '../../helpers/helpers';
import editar from '../../img/icono_editar.png'
import eliminar from '../../img/icono_eliminar.png'

const TablaEgresos = ({modal, setModal, guardarEgresos, egresos}) => {

    const [totalEgresos, setTotalEgresos] = useState(0);

    useEffect(()=>{
        const totalSalida=egresos.reduce((total, egreso)=>egreso.monto+total, 0)
        setTotalEgresos(totalSalida)
        
    },[egresos])
      
    const handelAbrirModal=(e)=>{
        e.preventDefault();
        setModal(true)
    }
  return (
    <div className='contenido-tablaegresos'>
      <h3>Egresos</h3>
      <div className='input-nuevoegreso'>
        <input
          type="submit"
          value="Nuevo Egreso"
          onClick={handelAbrirModal}
        />
        </div>
      <div  className='tabla-egresos'>
            <table>
                <thead>
                    <tr>           
                        <th width="40%">Concepto</th>
                        <th>Monto</th>
                        <th>Fecha</th>
                        <th width="25%">Empleado</th>
                        <th >Acción</th>
                    </tr>
                </thead>
                <tbody className='cuerpo'>
                    {egresos.map(egreso=>(
                        <tr>                
                            <td>{egreso.concepto}</td>
                            <td>{FormatoMoneda(egreso.monto)}</td>
                            <td>{egreso.fecha}</td>
                            <td>{egreso.usuario}</td>
                            <td>
                            <img
                                src={editar}
                                onClick={handelAbrirModal}
                            />
                            <img
                                src={eliminar}
                            />
                        </td>
                        </tr>
                    ))}
                  
                   
                </tbody>
            </table>
            <div className='total-egresos'>
                <p>Total: <span>{FormatoMoneda(totalEgresos)}</span></p>
            </div>

            {modal && <ModalEgresos
                        setModal={setModal}
                        guardarEgresos={guardarEgresos}
                        egresos={egresos}
            />}
        </div>
    </div>
  )
}

export default TablaEgresos

import { useEffect, useState } from 'react';
import ModalIngresos from '../modales/ModalIngresos';
import Usuarios from '../usuarios/Usuarios';
import './tablaIngresos.css'
import { FormatoMoneda } from '../../helpers/helpers';
import editar from '../../img/icono_editar.png'
import eliminar from '../../img/icono_eliminar.png'


const TablaIngresos = ({modal, setModal, guardarIngresos, ingresos, setIngresoEditar}) => {    
    

    const [totalIngreso, setTotalIngreso] = useState(0);   

    useEffect(()=>{
        const totalIngresado=ingresos.reduce((total, ingreso)=>ingreso.monto + total, 0)
        setTotalIngreso(totalIngresado)
       
    }, [ingresos])

    const handelAbrirModal=(e)=>{
        e.preventDefault();
        setModal(true)
        return
    }

   
 
  return (
    <div className='contenido-tablaingresos'>
      <h3>Ingresos</h3>
      <div className='input-nuevoingreso'>
        <input
          type="submit"
          value="Nuevo Ingreso"
          onClick={handelAbrirModal}
        />
        </div>
      <div  className='tabla-ingresos'>
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
                {ingresos.map(ingreso=>(
                    <tr>                
                        <td>{ingreso.concepto}</td>
                        <td>{FormatoMoneda(ingreso.monto)}</td>
                        <td>{ingreso.fecha}</td>
                        <td>0</td>
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

            <div className='total-ingresos'>
                <p>Total: <span>{FormatoMoneda(totalIngreso)}</span></p>
            </div>

            {modal&& <ModalIngresos
                    setModal={setModal}
                    guardarIngresos={guardarIngresos}
            />}
        </div>
    </div>
  )
}
// comentario
export default TablaIngresos

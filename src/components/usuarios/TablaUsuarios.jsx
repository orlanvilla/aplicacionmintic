import { useEffect, useState } from 'react';
import './tablaUsuarios.css'
import iconoeliminar from '../../img/icono_eliminar.png'
import iconoactualizar from '../../img/icono_editar.png'
import ModalUsuario from './ModalUsuario';

const TablaUsuario = ({modal, setModal}) => {     
  
  const handleModalUsuario=(e)=>{
      e.preventDefault();
      setModal(true)
  }
 
  return (
    <div className='contenido-usuario'>
       <div className='input-nuevousuario'>
        <input
          type="submit"
          value="Nuevo Empleado"
          onClick={handleModalUsuario}
        />
        </div>
      <div  className='tabla-usuario'>
            <table>
                <thead>
                    <tr>           
                        <th width="32%">Nombre</th>
                        <th width="25%">Email</th>
                        <th width="17%">Rol</th>
                        <th width="10%">Teléfono</th>
                        <th width="27%">Acción</th>
                    </tr>
                </thead>
                <tbody className='cuerpo-usuario'>                
                    <tr>                
                        <td>Carlos Orlando Villarreal</td>
                        <td>orlan-villa@hotmail.com</td>
                        <td>Analista</td>
                        <td>3103602787</td>
                        <td> 
                        <img
                            src={iconoactualizar}
                            alt="actualizar"
                            onClick={handleModalUsuario}
                            />
                            <img
                            src={iconoeliminar}
                            alt="eliminar"
                            />                         
                        </td>
                    </tr>                   
                </tbody>
            </table>
        </div>
        {modal&& <ModalUsuario
                  setModal={setModal}
        />}
    </div>
  )
}
// comentario
export default TablaUsuario

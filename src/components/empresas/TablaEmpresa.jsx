import { useEffect, useState } from 'react';
import './tablaEmpresa.css'
import iconoeliminar from '../../img/icono_eliminar.png'
import iconoactualizar from '../../img/icono_editar.png'
import ModalEmpresa from './ModalEmpresa';


const TablaEmpresa = ({modal, setModal}) => {  
  
  const handleAbrirModal=(e)=>{
    e.preventDefault();
    setModal(true)
  }
 
  return (
    <div className='contenido-empresas'>
       <div className='input-nuevoempresa'>
        <input
          type="submit"
          value="Agregar Empresa"
          onClick={handleAbrirModal}
         
        />
        </div>
      <div  className='tabla-empresa'>
            <table>
                <thead>
                    <tr>           
                        <th width="32%">Nombre</th>
                        <th width="25%">Dirección</th>
                        <th width="10%">Teléfono</th>
                        <th width="17%">Tipo</th>
                        <th width="27%">Acción</th>
                    </tr>
                </thead>
                <tbody className='cuerpo-empresa'>                
                    <tr>                
                        <td>Exito</td>
                        <td>Bogotá</td>
                        <td>123456454</td>
                        <td>Cliente</td>
                        <td> 
                        <img
                            src={iconoactualizar}
                            alt="actualizar"
                            onClick={handleAbrirModal}
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
        {modal && <ModalEmpresa
                  setModal={setModal}
        />}
    </div>
  )
}
// comentario
export default TablaEmpresa

import { useState, useEffect} from 'react'
import './home.css'
import logoPrincipal from '../../img/icono.png'
import Principal from '../vistaPrincipal/Principal'
import IngresosGastos from '../imgresosEgresos/IngresosGastos'
import Usuarios from '../usuarios/Usuarios'
import Empresas from '../empresas/Empresas'
import { GenerarId } from '../../helpers/helpers'
import ModalIngresos from '../modales/ModalIngresos'
import btn_salir from '../../img/btn-salir.png'

const Home = () => {
  const [pagina, setPagina] = useState("principal")
  const [modal, setModal] = useState(false);
  const [ingresos, setIngresos] = useState([]);
  const [egresos, setEgresos] = useState([]);
  const [ingresoEditar, setIngresoEditar] = useState({});
  const [egresoEditar, setEgresoEditar] = useState({});


const handlePrincipal=(e)=>{
  e.preventDefault();
  setPagina("principal")
}
const handleIngresosGastos=(e)=>{
  e.preventDefault();
  setPagina("ingresosGastos")
}

const handleUsuarios=(e)=>{
  e.preventDefault();
  setPagina("usuarios")
}
const handleEmpresas=(e)=>{
  e.preventDefault();
  setPagina("empresas")
}
const guardarIngresos=(ingreso)=>{
  ingreso.id=GenerarId();
  setIngresos([...ingresos, ingreso])
  setModal(false)
}
const guardarEgresos=(egreso)=>{
  egreso.id=GenerarId();
  setEgresos([...egresos, egreso])
  setModal(false)
}



  return (
    <>
    <header className='contenedor-home'>
    <div className='btn-salir'>
      <img      
        src={btn_salir}
      />
    </div>  
        <div className='contenido-header'>
            <div className='logo-principal'>
                <img
                src={logoPrincipal}
                />
            </div> 
            <nav className='navegador-header'>
                 <a href='#'
                  onClick={handlePrincipal}                 
                 >Principal</a>
                <a href='#'
                  onClick={handleIngresosGastos}
                >Ingresos y Egresos</a>
                <a href='#'
                  onClick={handleUsuarios}
                >Empleados</a>
                <a href='#'
                  onClick={handleEmpresas}
                >Empresa</a>
            </nav>  
        </div>
    </header>

    <main>
      <div>
        {pagina==="principal"? <Principal/>:""}
        {pagina==="ingresosGastos"? <IngresosGastos
                                      modal={modal}
                                      setModal={setModal}
                                      guardarIngresos={guardarIngresos}
                                      ingresos={ingresos}
                                      guardarEgresos={guardarEgresos}
                                      egresos={egresos}
                                      setIngresoEditar={setIngresoEditar}
                                      setEgresoEditar={setEgresoEditar}                                     
        />:""}
        {pagina==="usuarios"? <Usuarios
                              modal={modal}
                              setModal={setModal}
        />:""}
        {pagina==="empresas"? <Empresas
                              modal={modal}
                              setModal={setModal}
        />:""}

      </div>
    </main>  
    
    <footer className='contenedor-footer'>
    <p>Todos los derechos reservados @ 2022</p>
    </footer>



    </>
  )
}

export default Home

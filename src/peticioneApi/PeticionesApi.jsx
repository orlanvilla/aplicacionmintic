import { useContext } from "react"
import { AppContext } from "../context/AppContex"
import { Navigate, useNavigate } from "react-router-dom"
import swal from 'sweetalert'

export const PeticionesApi=()=>{
    const navigate=useNavigate();

    const url= "https://apiempresamintic2022.herokuapp.com/"
    //const url="http://localhost:8080/"

    const{setEmpresas, 
        setEmpleados, 
        setTransacciones, 
        transacciones, 
        setTotalIngresado, 
        setTotalEgresado,
        setLogueado,
        setUsuario,
        usuario    
    }=useContext(AppContext)

//####################### FUNCION PARA EMPRESA #################################################

        //Esta funcion carga en el sistema todas las empresas
    const cargarEmpresas=async()=>{
        try {          
            const respuesta=await fetch(url+"empresas")
            if(respuesta.status===200){
                const respuestaEmpresas=await respuesta.json()
                const empresasClientes=respuestaEmpresas.filter(emcli=>emcli.tipo==="Cliente")
                setEmpresas(empresasClientes) 
            }            
        } catch (error) {
            console.log(error)            
        }
    }

    //Esta funcion añade una empresa
    const añadirEmpresa=async(empresa)=>{
        try {
            const respuesta=await fetch(url+"empresa", {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(empresa)                
            }) 
            if(respuesta.status===200){
                    swal("Empresa añadida con exito")
            }
            
        } catch (error) {
            console.log(error)
        }
    }
     //Esta funcion actualiza una empresa
     const actualizarEmpresa=async(empresa)=>{
        try {
            const respuesta=await fetch(url+"empresa", {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(empresa)                
            }) 
            if(respuesta.status===200){
                    swal("Empresa actualizada con exito")
            }
            
        } catch (error) {
            console.log(error)
        }
    }
        //Metodo para eliminar empresa
        const eliminarEmpresa=async(nitempresa)=>{
            try {
                const respuesta= await fetch (url + "empresa/" + nitempresa,{
                    method:'DELETE',
                    headers:{'Content-Type':'application/json'}
                })
                if(respuesta.status===200){
                    swal("Empresa eliminada con exito")
            }                
            } catch (error) {
                console.log(error)
            }
        }
    
        //############################### FUNCION PARA EMPLEADO #########################################

        //Funcion para cargar empleados

    const cargarEmpleados=async()=>{
        try {          
            const respuesta=await fetch(url+"empleados")
            if(respuesta.status===200){
                const respuestaEmpleados=await respuesta.json()
                setEmpleados(respuestaEmpleados) 
            }            
        } catch (error) {
            console.log(error)            
        }
    }

    const crearUsuario=async(usuario)=>{
        try {
            const respuesta=await fetch(url+"usuario", {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(usuario)                
            }) 
        } catch (error) {
            console.log(error)
        }
    }       
      

    //Esta funcion añade una empresa
    const añadirEmpleado=async(empleado)=>{
        try {
            const respuesta=await fetch(url+"empleado", {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(empleado)                
            }) 
            if(respuesta.status===200){
                swal("Se registro el empleado exitosamente")
                //Luego que se cree el empleado en db se crea su respectivo usuario, donde 
                //usuario=cedula, constraseña=cedula
                const usuario={
                    usuario: empleado.cedulaempleado,
                    contraseña:empleado.cedulaempleado,
                        empleado: {
                            cedulaempleado:parseInt(empleado.cedulaempleado)
                        }
                }
                crearUsuario(usuario)
            }
            
        } catch (error) {
            console.log(error)
        }
    }
    //Esta funcion actualiza un empleado
    const actualizarEmpleado=async(empleado)=>{
        try {
            const respuesta=await fetch(url+"empleado", {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(empleado)                
            }) 
            if(respuesta.status===200){
                swal("Se actualizó el empleado exitosamente")
            }
            
        } catch (error) {
            console.log(error)
        }
    }
        //Metodo para eliminar empresa
        const eliminarEmpleado=async(cedulaempleado)=>{
            try {
                const respuesta= await fetch (url + "empleado/" + cedulaempleado,{
                    method:'DELETE',
                    headers:{'Content-Type':'application/json'}
                })
                if(respuesta.status===200){
                    swal("Empleado eliminadao con exito")
            }                
            } catch (error) {
                console.log(error)
            }
        }
         //############################### FUNCION PARA INGRESOS #########################################

            //Cargar ingresos
            
    const cargarIngresos=async()=>{
        try {          
            const respuesta=await fetch(url+"transacciones")
            if(respuesta.status===200){
                const respuestaTransacciones=await respuesta.json()
                const ingresos= respuestaTransacciones.filter((tr)=>tr.tipo==="Ingreso")
                if(usuario.empleado.rol==="Administrador"){
                    setTransacciones(ingresos) 
                }else{
                    const ingresoIndividuales=ingresos.filter((ingr)=>ingr.empleado.cedulaempleado===usuario.empleado.cedulaempleado)
                    setTransacciones(ingresoIndividuales)
                }                 
            }            
        } catch (error) {
            console.log(error)            
        }
    }
            // Añadir Transaccion ingreso
    
            const añadirIngreso=async(ingreso)=>{
                console.log(ingreso)
                try {
                    const respuesta=await fetch(url+"transaccion", {
                        method:'POST',
                        headers:{'Content-Type':'application/json'},
                        body:JSON.stringify(ingreso)                
                    }) 
                    if(respuesta.status===200){
                        swal("Ingreso registrado exitosamente")
                    }
                    
                } catch (error) {
                    console.log(error)
                }
            }
    //Esta funcion actualiza un ingreso
    const actualizarIngreso=async(ingreso)=>{
        try {
            const respuesta=await fetch(url+"transaccion", {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(ingreso)                
            }) 
            if(respuesta.status===200){
                swal("Ingreso actualizado")
            }            
        } catch (error) {
            console.log(error)
        }
    }
     //Metodo para eliminar ingreso
     const eliminarIngreso=async(idtransaccion)=>{
        try {
            const respuesta= await fetch (url + "transaccion/" + idtransaccion,{
                method:'DELETE',
                headers:{'Content-Type':'application/json'}
            })
            if(respuesta.status===200){
                swal("Transacción eliminada")
        }                
        } catch (error) {
            console.log(error)
        }
    } 

    //Calcular ingresos
    const calcularTotalIngreso=()=>{
        let sumaIngresos=0
        transacciones.forEach(tr => {
            sumaIngresos+=parseFloat(tr.monto)
        });
        setTotalIngresado(sumaIngresos)        
    }
     
  

         //############################### FUNCION PARA EGRESOS #########################################

            //Cargar Egresos
            const cargarEgresos=async()=>{
                try {          
                    const respuesta=await fetch(url+"transacciones")
                    if(respuesta.status===200){
                        const respuestaTransacciones=await respuesta.json()
                        const egresos= respuestaTransacciones.filter((tr)=>tr.tipo==="Egreso")
                        if(usuario.empleado.rol==="Administrador"){
                            setTransacciones(egresos) 
                        }else{
                            const egresoIndividuales=egresos.filter((ingr)=>ingr.empleado.cedulaempleado===usuario.empleado.cedulaempleado)
                            setTransacciones(egresoIndividuales)
                        }                 
                    }            
                } catch (error) {
                    console.log(error)            
                }
            }
            // Añadir Transaccion egreso
    
            const añadirEgreso=async(egreso)=>{
                try {
                    const respuesta=await fetch(url+"transaccion", {
                        method:'POST',
                        headers:{'Content-Type':'application/json'},
                        body:JSON.stringify(egreso)                
                    }) 
                    if(respuesta.status===200){
                        swal("Egreso registrado exitosamente")
                    }
                    
                } catch (error) {
                    console.log(error)
                }
            }
             //Esta funcion actualiza un egreso
    const actualizarEgreso=async(egreso)=>{
        try {
            const respuesta=await fetch(url+"transaccion", {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(egreso)                
            }) 
            if(respuesta.status===200){
                swal("Egreso actualizado")
            }
            
        } catch (error) {
            console.log(error)
        }
    } 
        //Metodo para eliminar Egreso
        const eliminarEgreso=async(idtransaccion)=>{
            try {
                const respuesta= await fetch (url + "transaccion/" + idtransaccion,{
                    method:'DELETE',
                    headers:{'Content-Type':'application/json'}
                })
                if(respuesta.status===200){
                    swal("Transacción eliminada")
            }                
            } catch (error) {
                console.log(error)
            }
        }  
        //Calcular egresos
    const calcularTotalEgreso=()=>{
        let sumaEgresos=0
        transacciones.forEach(tr => {
            sumaEgresos+=parseFloat(tr.monto)
        });
        setTotalEgresado(sumaEgresos)        
    }

           //############################### FUNCION PARA LOGUEARSE #########################################
      const iniciarSesion=async(usuario, contraseña)=>{
        try {          
            const respuesta=await fetch(url+"usuarios")
            console.log("respuesta Fetch:", respuesta)
            if(respuesta.status===200){
                const respuestaUsuarios=await respuesta.json()
                const us=respuestaUsuarios.find(user=>user.usuario===usuario && user.contraseña===contraseña)
                if(typeof us==='undefined'){
                    swal("Usuario o Contraseña Incorrecta")
                }else{
                    setLogueado(true)
                    navigate("/home")
                    setUsuario(us)
                      const sesion={
                          usuario:usuario,
                          contraseña:contraseña
                      }
                      localStorage.setItem('sesion', JSON.stringify(sesion))
                }                 
            }            
        } catch (error) {
            console.log(error)            
        }       
      }
      //############################### FUNCION PARA CREAR USUARIO Y CONTRASEÑA DEL EMPLEADO #########################################

      

    return{
        cargarEmpresas, 
        añadirEmpresa,
        eliminarEmpresa,
        actualizarEmpresa,
        cargarEmpleados,
        añadirEmpleado,
        actualizarEmpleado,
        eliminarEmpleado,
        cargarIngresos,
        cargarEgresos,
        añadirIngreso,
        añadirEgreso,
        actualizarIngreso,
        actualizarEgreso,
        eliminarIngreso,
        eliminarEgreso,
        calcularTotalIngreso,
        calcularTotalEgreso,
        iniciarSesion,
        crearUsuario
        
    }    
}
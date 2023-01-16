import { createContext, useState} from "react";
import { ObtenerDiferencia, EvaluarMarca,EvaluarPlan, FormatearDinero } from "@/helpers";

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) =>{

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })
    const [resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)
    const [error , setError] = useState('')

    const handleChnage = e => {
        setDatos({
            ...datos, //crea una copia del objeto para luego ingresar un nuevo valor sin que los anteriores se borren
            [e.target.name] : e.target.value
        })
    }
    const cotizarSeguro = () =>{
        //base 
        let base = 2000
        //obtener diferencia
       const DatosObtenidos = ObtenerDiferencia(+datos.year)
        // restar 3% por cada ano
       base -= ((DatosObtenidos * 3) * base) / 100
     

       //Evaluar marca 
       base *= EvaluarMarca(datos.marca)
     
       // plan
       
       base *= EvaluarPlan(datos.plan)
       
       base = FormatearDinero(base)

       setCargando(true)

        setTimeout(() =>{
            setResultado(base)
            setCargando(false)
        },3000)

       
        
    }

    return (
        <CotizadorContext.Provider
            value={{
                handleChnage,
                datos,
                setError,
                error,
                cotizarSeguro,resultado, cargando
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}
export {
    CotizadorProvider
}
export default CotizadorContext
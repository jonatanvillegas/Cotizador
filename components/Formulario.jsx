import { MARCAS , years , PLANES} from "@/constants"
import Error from "./Error"
import {useCotizador} from '@/hooks/useCotizador'
import { Fragment} from "react"



export default function Formulario() {

  const {datos,handleChnage,setError,error,cotizarSeguro} = useCotizador()

  const handleSubmit = e => {
    e.preventDefault()
    
    if(Object.values(datos).includes('')){
        setError('Todos los campos son necesarios')   
        return
    }
    setError('')
    //
    cotizarSeguro()
  }
  
  return (
    <>

        {error && <Error/> }
      <form onSubmit={handleSubmit}>
        <div className="my-5">
            <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase" >
                Marca
            </label>
            <select name="marca"  className="w-full p-3 bg-white border border-gray-200" onChange={e => handleChnage(e)}>
                <option value={datos.marca}>Marca</option>
                {MARCAS?.map(marca => (
                    <option key={marca.id} value={marca.id}> {marca.nombre}</option>
                ))}
            </select>
        </div>
        <div className="my-5">
            <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase" >
                Año
            </label>
            <select name="year"  className="w-full p-3 bg-white border border-gray-200"  onChange={e => handleChnage(e)}>
                <option value={datos.year}>Selecciona un Año</option>
                {years?.map(year => (
                    <option key={year} value={year}> {year}</option>
                ))}
            </select>
        </div>
        <div className="my-5">
            <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase" >
                Elige un Plan
            </label>
            <div className="flex gap-3">

            {PLANES?.map(plan => (
                <Fragment key={plan.id} >
                    <label htmlFor="">{plan.nombre}</label>
                    <input type="radio" name="plan" value={plan.id}  onChange={e => handleChnage(e)}/>
                </Fragment>
                
            ))}
           </div>
        </div>
        <input type="submit" value='cotizar' className="w-full bg-indigo-500 hover:bg-indigo-800 transition-colors text-white cursor-pointer
        p-3 uppercase font-bold" />
      </form>
    </>
  )
}

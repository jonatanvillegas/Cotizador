import {useCotizador} from '@/hooks/useCotizador'
import {MARCAS,PLANES} from '@/constants'
import { useCallback, useMemo, useRef } from 'react'

export default function Resultado() {

    const {resultado, datos} = useCotizador()
    const {marca, year,plan} = datos

    const [filtradoM] = useCallback( //elimina que se actualice de inmediato 
        MARCAS.filter(m => m.id == +marca),[resultado]
        ) 
    const yearMutable = useRef(year) //de vuelve un objto mutable el cual durara hasta que pierda su utilidad

    const [filtradoP] = useCallback(PLANES.filter(p => p.id == +plan),[resultado])
   
    
    if(resultado == 0) return null

  return (
    <div className='bg-gray-100 text-center mt-5 p-5 shadow '>
        <h2 className='text-gray-500 text-4xl font-black '>Resumen</h2>

        <p className='my-2 font-bold'>
            <span>marca:</span>
            {filtradoM.nombre}
        </p>
        <p className='my-2 font-bold'>
            <span>marca:</span>
            {filtradoP.nombre}
        </p>
        <p className='my-2 font-bold'>
            <span>Year:</span>
            {yearMutable.current}
        </p>
        <p className='my-2 font-bold text-2xl'>
            <span>Total Cotizacion: </span>
            {resultado}
        </p>
    </div>
  )
}

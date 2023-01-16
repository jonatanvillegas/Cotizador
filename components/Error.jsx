import { useCotizador } from "@/hooks/useCotizador"

export default function Error() {

    const {error} = useCotizador()
  return (
    <div className=" border border-red-700 text-center bg-red-100 py-3 text-red-700">
     <p className="">{error}</p> 
    </div>
  )
}

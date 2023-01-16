import Head from "next/head"
import AppSeguro from "@/components/AppSeguro"
import CotizadorProvider from "@/context/CotizadorProvider"

export default function Home() {

  return (
   <>
    <Head>
      <title>Cotizador Formulario</title>
    </Head>
      <AppSeguro/>

   </>

  )
}

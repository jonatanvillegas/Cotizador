import '@/styles/globals.css'
import { CotizadorProvider } from '@/context/CotizadorProvider'

export default function App({ Component, pageProps }) {

  return(
    <CotizadorProvider>
      <Component {...pageProps}/>
    </CotizadorProvider>
    ) 
    
}

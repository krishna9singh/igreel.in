import '../styles/globals.css'
import Script from 'next/script'
import dynamic from "next/dynamic";


function MyApp({ Component, pageProps }) {
  
  return (
    <>
    <Script
    strategy='lazyOnload'
    src={`https://www.googletagmanager.com/gtag/js?id=G-3XJT3XK63F`}/>
    <Script
    strategy='lazyOnload'
    id='analytics'>
    {` window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-3XJT3XK63F');`}
    </Script>
    <Component {...pageProps} />
    
    </>
    
    )
    
}
export default MyApp

// export default dynamic(() => Promise.resolve(MyApp), {
//   ssr: false,
// });
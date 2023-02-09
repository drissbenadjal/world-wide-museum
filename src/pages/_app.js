import '@/styles/globals.css'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

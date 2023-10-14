import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Footer from '@/components/footer'
import '@/styles/globals.css'


import store from '@/store/store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  )
}

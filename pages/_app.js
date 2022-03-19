import '../styles/sanitize.css/sanitize.css'
import '../styles/sanitize.css/assets.css'
import '../styles/sanitize.css/forms.css'
import '../styles/sanitize.css/reduce-motion.css'
import '../styles/globals.scss'
import { Provider } from 'react-redux'
import { AnimatePresence } from 'framer-motion'
import { store } from '../store/store'

function MyApp({ Component, pageProps, router }) {
  return (
    <Provider store={ store }>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </Provider>
  )
}

export default MyApp

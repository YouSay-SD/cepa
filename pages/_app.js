import '../styles/sanitize.css/sanitize.css'
import '../styles/sanitize.css/assets.css'
import '../styles/sanitize.css/forms.css'
import '../styles/sanitize.css/reduce-motion.css'
import '../styles/globals.scss'
import { Provider } from 'react-redux'
import { AnimatePresence } from 'framer-motion'
import { store } from '../store/store'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query'
import { useRef } from 'react'
import mapboxgl from 'mapbox-gl'; 
 
mapboxgl.accessToken = 'pk.eyJ1IjoiYXJpZWw1NTUiLCJhIjoiY2wxYmxuYzhhMWpiZzNpbnczYXQ4aHptciJ9.t24K9VtvEpFFHa3iTP25bQ';

function MyApp({ Component, pageProps, router }) {
  const queryClient = useRef(new QueryClient())

  return (
    <Provider store={ store }>
      <QueryClientProvider client={queryClient.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <AnimatePresence exitBeforeEnter>
            <div id="modal-graphic"></div>
            <div id="modal-bullet"></div>
            <div id="modal-proposal"></div>
            <Component {...pageProps} key={router.asPath} />
            <ReactQueryDevtools initialIsOpen={false} />
          </AnimatePresence>
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  )
}

export default MyApp

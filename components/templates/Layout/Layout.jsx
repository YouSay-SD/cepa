import { motion, MotionConfig } from 'framer-motion'

const Layout = ({ children }) => {
  return (
    <MotionConfig transition={{ duration: 0.7 }}>
      <motion.div
        animate='layoutAnimate'
        initial='layoutInitial'
        exit='layoutExit'
        variants={{
          layoutInitial: {
            opacity: 0,
          },
          layoutAnimate: {
            opacity: 1,
          },
          layoutExit: {
            opacity: 0,
          }
        }}
      >
        <main>
          {children}
        </main>
      </motion.div>
    </MotionConfig>
  )
}

export default Layout

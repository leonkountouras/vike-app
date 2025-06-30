import React from 'react'
import { motion } from 'framer-motion'
import Header from './Header'
import Hero from './Hero'
import ProductsAnimated from './ProductsAnimated'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  const styles = {
    app: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    },
    main: {
      flex: 1
    }
  }

  return (
    <motion.div 
      style={styles.app}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <motion.main 
        style={styles.main}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Hero />
        <ProductsAnimated />
        <About />
        <Contact />
      </motion.main>
      <Footer />
    </motion.div>
  )
}

export default Home
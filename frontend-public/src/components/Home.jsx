import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Products from './Products'
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
    <div style={styles.app}>
      <Header />
      <main style={styles.main}>
        <Hero />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home
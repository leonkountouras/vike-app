import React from 'react'

const About = () => {
  const styles = {
    section: {
      padding: '4rem 0',
      backgroundColor: '#fff'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#2c3e50',
      marginBottom: '1rem'
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#6c757d',
      maxWidth: '600px',
      margin: '0 auto'
    },
    content: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '3rem',
      marginBottom: '3rem'
    },
    textContent: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    paragraph: {
      fontSize: '1.1rem',
      lineHeight: '1.8',
      color: '#555',
      textAlign: 'justify'
    },
    imageContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    aboutImage: {
      width: '100%',
      maxWidth: '500px',
      height: 'auto',
      borderRadius: '16px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
    },
    features: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      marginTop: '3rem'
    },
    featureCard: {
      backgroundColor: '#f8f9fa',
      padding: '2rem',
      borderRadius: '16px',
      textAlign: 'center',
      border: '1px solid #e9ecef',
      transition: 'all 0.3s ease'
    },
    featureCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
      backgroundColor: '#fff'
    },
    featureIcon: {
      fontSize: '3rem',
      marginBottom: '1rem',
      display: 'block'
    },
    featureTitle: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: '#2c3e50',
      marginBottom: '1rem'
    },
    featureDescription: {
      fontSize: '1rem',
      color: '#6c757d',
      lineHeight: '1.6'
    },
    stats: {
      backgroundColor: '#f8f9fa',
      padding: '3rem 0',
      marginTop: '3rem',
      borderRadius: '16px'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem'
    },
    statItem: {
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#007bff',
      marginBottom: '0.5rem',
      display: 'block'
    },
    statLabel: {
      fontSize: '1rem',
      color: '#6c757d',
      fontWeight: '600'
    }
  }

  const features = [
    {
      icon: '🎯',
      title: 'Quality First',
      description: 'We carefully curate every product to ensure the highest quality standards for our customers.'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Stay ahead with the latest technology and innovative products across all categories.'
    },
    {
      icon: '💎',
      title: 'Premium Selection',
      description: 'Our team handpicks premium products that combine functionality with exceptional design.'
    },
    {
      icon: '🛡️',
      title: 'Trusted Brand',
      description: 'Built on trust and reliability, we have been serving customers with excellence for years.'
    },
    {
      icon: '🌍',
      title: 'Global Reach',
      description: 'Connecting customers worldwide with products from trusted manufacturers and brands.'
    },
    {
      icon: '💡',
      title: 'Expert Advice',
      description: 'Our knowledgeable team provides expert guidance to help you make informed decisions.'
    }
  ]

  const stats = [
    { number: '500+', label: 'Products Available' },
    { number: '50+', label: 'Product Categories' },
    { number: '10,000+', label: 'Satisfied Customers' },
    { number: '5+', label: 'Years of Excellence' }
  ]

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>About ProductHub</h2>
          <p style={styles.subtitle}>
            Your trusted partner in discovering quality products that enhance your lifestyle
          </p>
        </div>

        <div style={styles.content}>
          <div style={styles.textContent}>
            <p style={styles.paragraph}>
              At ProductHub, we believe that great products have the power to transform lives. 
              Founded with a passion for quality and innovation, we have dedicated ourselves to 
              curating an exceptional collection of products across diverse categories.
            </p>
            <p style={styles.paragraph}>
              Our journey began with a simple mission: to bridge the gap between customers and 
              outstanding products. We work tirelessly to source items that not only meet but 
              exceed expectations, ensuring that every purchase brings value and satisfaction.
            </p>
            <p style={styles.paragraph}>
              From cutting-edge electronics to elegant furniture, from kitchen essentials to 
              outdoor gear, our carefully selected inventory represents the best in each category. 
              We partner with trusted manufacturers and emerging brands alike, always prioritizing 
              quality, sustainability, and customer satisfaction.
            </p>
          </div>
          
          <div style={styles.imageContent}>
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
              alt="About ProductHub"
              style={styles.aboutImage}
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div 
              style={{
                ...styles.imageContent,
                ...styles.aboutImage,
                backgroundColor: '#f8f9fa',
                fontSize: '4rem',
                color: '#dee2e6',
                display: 'none'
              }}
            >
              🏢
            </div>
          </div>
        </div>

        <div style={styles.features}>
          {features.map((feature, index) => (
            <div
              key={index}
              style={styles.featureCard}
              onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, styles.featureCardHover)
              }}
              onMouseLeave={(e) => {
                Object.assign(e.currentTarget.style, styles.featureCard)
              }}
            >
              <span style={styles.featureIcon}>{feature.icon}</span>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>

        <div style={styles.stats}>
          <div style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} style={styles.statItem}>
                <span style={styles.statNumber}>{stat.number}</span>
                <span style={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
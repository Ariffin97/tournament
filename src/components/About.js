import React from 'react';
import { motion } from 'framer-motion';
import { Medal, Users, Gift } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Medal,
      title: "Professional Competition",
      description: "Compete against top players from across Southeast Asia"
    },
    {
      icon: Users,
      title: "All Skill Levels",
      description: "Categories for beginners to advanced players"
    },
    {
      icon: Gift,
      title: "Amazing Prizes",
      description: "Substantial prize pool and trophies for winners"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About the Championship
        </motion.h2>
        
        <div className="about-content">
          <motion.p
            className="about-description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join us for the most prestigious pickleball tournament in Malaysia! The Malaysia Open Pickleball Championship brings together players of all skill levels for an unforgettable sporting experience.
          </motion.p>
          
          <motion.div
            className="features"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="feature"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="feature-icon">
                    <IconComponent size={48} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Layers, Star, Trophy } from 'lucide-react';

const Details = () => {
  const details = [
    {
      icon: Calendar,
      title: "Date & Time",
      content: (
        <div>
          <p><strong>March 15-17, 2025</strong></p>
          <p>Competition starts at 8:00 AM daily</p>
        </div>
      )
    },
    {
      icon: Layers,
      title: "Categories",
      content: (
        <ul>
          <li>Men's Singles & Doubles</li>
          <li>Women's Singles & Doubles</li>
          <li>Mixed Doubles</li>
          <li>Junior Categories (U-16, U-18)</li>
          <li>Senior Categories (50+, 60+)</li>
        </ul>
      )
    },
    {
      icon: Star,
      title: "Skill Levels",
      content: (
        <ul>
          <li>Beginner (2.5-3.0)</li>
          <li>Intermediate (3.5-4.0)</li>
          <li>Advanced (4.5+)</li>
          <li>Open/Pro Division</li>
        </ul>
      )
    },
    {
      icon: Trophy,
      title: "Prize Pool",
      content: (
        <div>
          <p><strong>RM 50,000</strong> total prize money</p>
          <p>Trophies and medals for all categories</p>
        </div>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="details" className="section bg-light">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Tournament Details
        </motion.h2>
        
        <motion.div
          className="details-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {details.map((detail, index) => {
            const IconComponent = detail.icon;
            return (
              <motion.div
                key={index}
                className="detail-card"
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.2 }
                }}
              >
                <div className="detail-icon">
                  <IconComponent size={48} />
                </div>
                <h3>{detail.title}</h3>
                <div className="detail-content">
                  {detail.content}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Details;
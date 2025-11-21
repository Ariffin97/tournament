import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building, Car, ExternalLink } from 'lucide-react';

const Venue = () => {
  const facilities = [
    "12 Professional Pickleball Courts",
    "Air-conditioned Indoor Facility",
    "Free Parking Available",
    "Food Courts & Restaurants",
    "Pro Shop & Equipment Rental",
    "Medical Support On-site"
  ];

  const transportation = [
    "LRT: Bukit Jalil Station (5 min walk)",
    "Free shuttle service from nearby hotels",
    "Taxi and Grab readily available"
  ];

  return (
    <section id="venue" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Venue Information
        </motion.h2>
        
        <div className="venue-grid">
          <motion.div
            className="venue-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="venue-section">
              <h3><MapPin className="inline-icon" /> Location</h3>
              <div className="location-details">
                <p><strong>National Sports Complex</strong></p>
                <p>Bukit Jalil, Kuala Lumpur</p>
                <p>57000 Malaysia</p>
              </div>
            </div>
            
            <div className="venue-section">
              <h3><Building className="inline-icon" /> Facilities</h3>
              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1, delay: 0.3 }}
              >
                {facilities.map((facility, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {facility}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            
            <div className="venue-section">
              <h3><Car className="inline-icon" /> Transportation</h3>
              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1, delay: 0.5 }}
              >
                {transportation.map((transport, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {transport}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
          
          <motion.div
            className="venue-map"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="map-placeholder">
              <motion.div
                className="map-content"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin size={64} />
                <h4>Interactive Map</h4>
                <p>National Sports Complex, Bukit Jalil</p>
                <motion.a
                  href="https://maps.google.com/maps?q=National+Sports+Complex+Bukit+Jalil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-small"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} />
                  View on Google Maps
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
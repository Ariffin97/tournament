import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Clock } from 'lucide-react';

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    category: '',
    skillLevel: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! Registration functionality will be available soon. Please contact us directly for now.');
  };

  const fees = [
    { category: "Singles (per category)", price: "RM 80" },
    { category: "Doubles (per team)", price: "RM 120" },
    { category: "Junior Categories", price: "RM 50" },
    { category: "Early Bird (before Feb 1)", price: "20% OFF" }
  ];

  const importantDates = [
    { label: "Early Bird Deadline", date: "February 1, 2025" },
    { label: "Regular Registration", date: "Until March 1, 2025" },
    { label: "Late Registration", date: "March 1-10, 2025 (+RM 20)" }
  ];

  return (
    <section id="registration" className="section bg-primary">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Registration Information
        </motion.h2>
        
        <div className="registration-grid">
          <motion.div
            className="registration-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="info-section">
              <h3>How to Register</h3>
              <ol>
                <li>Fill out the online registration form</li>
                <li>Pay the registration fee</li>
                <li>Upload required documents</li>
                <li>Receive confirmation email</li>
              </ol>
            </div>
            
            <div className="info-section">
              <h3><DollarSign className="inline-icon" /> Registration Fees</h3>
              <div className="fee-table">
                {fees.map((fee, index) => (
                  <motion.div
                    key={index}
                    className="fee-row"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span>{fee.category}</span>
                    <span className="fee-price">{fee.price}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="info-section">
              <h3><Clock className="inline-icon" /> Important Dates</h3>
              <ul className="dates-list">
                {importantDates.map((date, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <strong>{date.label}:</strong> {date.date}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            className="registration-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="form-card">
              <h3>Quick Registration</h3>
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                >
                  <option value="">Select Category</option>
                  <option value="mens-singles">Men's Singles</option>
                  <option value="womens-singles">Women's Singles</option>
                  <option value="mens-doubles">Men's Doubles</option>
                  <option value="womens-doubles">Women's Doubles</option>
                  <option value="mixed-doubles">Mixed Doubles</option>
                </motion.select>
                <motion.select
                  name="skillLevel"
                  value={formData.skillLevel}
                  onChange={handleInputChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                >
                  <option value="">Skill Level</option>
                  <option value="beginner">Beginner (2.5-3.0)</option>
                  <option value="intermediate">Intermediate (3.5-4.0)</option>
                  <option value="advanced">Advanced (4.5+)</option>
                  <option value="pro">Open/Pro</option>
                </motion.select>
                <motion.button
                  type="submit"
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register Now
                </motion.button>
              </motion.form>
              <p className="form-note">* Full registration and payment required to secure spot</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
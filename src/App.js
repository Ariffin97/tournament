import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <motion.div
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
    </motion.div>
  );
}

export default App;

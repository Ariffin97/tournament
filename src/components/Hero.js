import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Menu, X } from 'lucide-react';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeCategory, setActiveCategory] = useState('junior');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#details', label: 'Details' },
    { href: '#venue', label: 'Venue' },
    { href: '#registration', label: 'Registration' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="hero">
      {/* Hero Navbar */}
      <motion.nav
        className="hero-navbar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
          className={activeSection === 'home' ? 'active' : ''}
        >
          Home
        </a>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); handleNavClick('schedule'); }}
          className={activeSection === 'schedule' ? 'active' : ''}
        >
          Schedule
        </a>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); handleNavClick('category'); }}
          className={activeSection === 'category' ? 'active' : ''}
        >
          Category
        </a>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); handleNavClick('prize'); }}
          className={activeSection === 'prize' ? 'active' : ''}
        >
          Prize
        </a>
      </motion.nav>

      {/* Hero Content */}
      <div className="hero-content">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && (
            <motion.div
              key="home"
              className="hero-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src="/images/logo.png"
                alt="Tournament Logo"
                className="hero-logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />

              <motion.div
                className="hero-info"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <p><strong>Location:</strong> Pickle Depot, Sentul KL</p>
                <p><strong>Date:</strong> 5-8 December 2025</p>
              </motion.div>

              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.button
                  className="btn btn-primary"
                  onClick={() => setActiveSection('register')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register Now
                </motion.button>
              </motion.div>

              <motion.div
                className="sponsors-row"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <div className="title-sponsor">
                  <p>Title Sponsor</p>
                  <img src="/images/g.png" alt="Title Sponsor" />
                </div>
                <div className="organized-by">
                  <p>Organized By</p>
                  <img src="/images/mpa.png" alt="Organized By" />
                </div>
                <div className="co-organized-by">
                  <p>Co-Organized By</p>
                  <img src="/images/klpa.png" alt="Co-Organized By" />
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeSection === 'schedule' && (
            <motion.div
              key="schedule"
              className="schedule-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="schedule-days">
                <div className="schedule-day">
                  <h4>5th December 2025 (Friday)</h4>
                  <p className="round-info">Round Robin, Top 16, Quarter Final, Semi Final, 3rd Place Playoff, Final</p>

                  <div className="time-slot">
                    <span className="time">10:30AM – 5:30PM</span>
                    <ul>
                      <li>Men's Singles 50+</li>
                      <li>Women's Singles 50+</li>
                      <li>Men's Singles 35+</li>
                      <li>Women's Singles 35+</li>
                    </ul>
                  </div>

                  <div className="time-slot">
                    <span className="time">5:30PM – Finish</span>
                    <ul>
                      <li>Men's Singles 19+</li>
                      <li>Women's Singles 19+</li>
                    </ul>
                  </div>
                </div>

                <div className="schedule-day">
                  <h4>6th December 2025 (Saturday)</h4>
                  <p className="round-info">Round Robin, Top 16, Quarter Final, Semi Final, 3rd Place Playoff, Final</p>

                  <div className="time-slot">
                    <span className="time">7:30AM – 12:00PM</span>
                    <ul>
                      <li>Men's Doubles 50+</li>
                      <li>Women's Doubles 50+</li>
                      <li>Women's Doubles 35+</li>
                    </ul>
                  </div>

                  <div className="time-slot">
                    <span className="time">12:00PM – 5:30PM</span>
                    <ul>
                      <li>Men's Doubles 35+</li>
                      <li>Mixed Doubles 50+</li>
                    </ul>
                  </div>

                  <div className="time-slot">
                    <span className="time">5:30PM – Finish</span>
                    <ul>
                      <li>Men's Doubles 19+</li>
                      <li>Women's Doubles 19+</li>
                    </ul>
                  </div>
                </div>

                <div className="schedule-day">
                  <h4>7th December 2025 (Sunday)</h4>
                  <p className="round-info">Round Robin, Top 16, Quarter Final, Semi Final, 3rd Place Playoff, Final</p>

                  <div className="time-slot">
                    <span className="time">7:30AM – 12:00PM</span>
                    <ul>
                      <li>Boys Doubles U18</li>
                      <li>Girls Doubles U18</li>
                      <li>Boys Doubles U15</li>
                      <li>Girls Doubles U15</li>
                      <li>Boys Doubles U12</li>
                      <li>Girls Doubles U12</li>
                    </ul>
                  </div>

                  <div className="time-slot">
                    <span className="time">12:00PM – 5:30PM</span>
                    <ul>
                      <li>Mixed Doubles 35+</li>
                      <li>Mixed Doubles U15</li>
                    </ul>
                  </div>

                  <div className="time-slot">
                    <span className="time">5:30PM – Finish</span>
                    <ul>
                      <li>Mixed Doubles 19+</li>
                      <li>Mixed Doubles U18</li>
                    </ul>
                  </div>
                </div>

                <div className="schedule-day">
                  <h4>8th December 2025 (Monday)</h4>
                  <p className="round-info">Round Robin, Top 16, Quarter Final, Semi Final, 3rd Place Playoff, Final</p>

                  <div className="time-slot">
                    <span className="time">7:30AM – 12:00PM</span>
                    <ul>
                      <li>Girls Singles U18</li>
                      <li>Boys Singles U15</li>
                      <li>Boys Singles U12</li>
                      <li>Girls Singles U12</li>
                    </ul>
                  </div>

                  <div className="time-slot">
                    <span className="time">12:00PM – 5:30PM</span>
                    <ul>
                      <li>Boys Singles U18</li>
                      <li>Girls Singles U15</li>
                      <li>Mixed Doubles U12</li>
                    </ul>
                  </div>

                  <div className="time-slot">
                    <span className="time">5:30PM – Finish</span>
                    <ul>
                      <li>End</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="schedule-note">
                <p>The actual match times may differ after the official draw.</p>
                <p>Please check and follow your updated schedule on Sportsync or SportsWePlay accordingly.</p>
              </div>
            </motion.div>
          )}

          {activeSection === 'category' && (
            <motion.div
              key="category"
              className="category-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="category-tabs">
                <button
                  className={activeCategory === 'junior' ? 'active' : ''}
                  onClick={() => setActiveCategory('junior')}
                >
                  Junior
                </button>
                <button
                  className={activeCategory === 'adult' ? 'active' : ''}
                  onClick={() => setActiveCategory('adult')}
                >
                  Adult
                </button>
                <button
                  className={activeCategory === 'senior' ? 'active' : ''}
                  onClick={() => setActiveCategory('senior')}
                >
                  Senior
                </button>
              </div>

              {activeCategory === 'junior' && (
                <div className="category-details">
                  <h2>Junior's Categories</h2>

                  <div className="age-groups">
                    <span className="age-badge">UNDER 12</span>
                    <span className="age-badge">UNDER 15</span>
                    <span className="age-badge">UNDER 18</span>
                  </div>

                  <div className="events-list">
                    <div className="event-item">Boy's Doubles</div>
                    <div className="event-item">Girl's Doubles</div>
                    <div className="event-item">Mixed Doubles</div>
                    <div className="event-item">Boy's Singles</div>
                    <div className="event-item">Girl's Singles</div>
                  </div>

                  <div className="registration-fees">
                    <h3>Registration Fee</h3>
                    <div className="fee-cards">
                      <div className="fee-card">
                        <span className="fee-amount">RM50</span>
                        <span className="fee-label">Per Player</span>
                      </div>
                      <div className="fee-card">
                        <span className="fee-amount">RM100</span>
                        <span className="fee-label">Per Team</span>
                      </div>
                    </div>
                  </div>

                  <div className="category-notes">
                    <p>Players must be 18 years old & below to participate.</p>
                    <p>Open to players with any DUPR rating.</p>
                  </div>
                </div>
              )}

              {activeCategory === 'adult' && (
                <div className="category-details">
                  <h2>Adult's Categories</h2>

                  <div className="age-groups">
                    <span className="age-badge">19+</span>
                    <span className="age-badge">35+</span>
                  </div>

                  <div className="events-list">
                    <div className="event-item">Men's Doubles</div>
                    <div className="event-item">Women's Doubles</div>
                    <div className="event-item">Mixed Doubles</div>
                    <div className="event-item">Men's Singles</div>
                    <div className="event-item">Women's Singles</div>
                  </div>

                  <div className="registration-fees">
                    <h3>Registration Fee</h3>
                    <div className="fee-cards">
                      <div className="fee-card">
                        <span className="fee-amount">RM180</span>
                        <span className="fee-label">Per Player</span>
                      </div>
                      <div className="fee-card">
                        <span className="fee-amount">RM360</span>
                        <span className="fee-label">Per Team</span>
                      </div>
                    </div>
                  </div>

                  <div className="category-notes">
                    <p>Players must be 19 years old & above to participate.</p>
                    <p>Open to players with any DUPR rating.</p>
                  </div>
                </div>
              )}

              {activeCategory === 'senior' && (
                <div className="category-details">
                  <h2>Senior's Categories</h2>

                  <div className="age-groups">
                    <span className="age-badge">50+</span>
                  </div>

                  <div className="events-list">
                    <div className="event-item">Men's Doubles</div>
                    <div className="event-item">Women's Doubles</div>
                    <div className="event-item">Mixed Doubles</div>
                    <div className="event-item">Men's Singles</div>
                    <div className="event-item">Women's Singles</div>
                  </div>

                  <div className="registration-fees">
                    <h3>Registration Fee</h3>
                    <div className="fee-cards">
                      <div className="fee-card">
                        <span className="fee-amount">RM180</span>
                        <span className="fee-label">Per Player</span>
                      </div>
                      <div className="fee-card">
                        <span className="fee-amount">RM360</span>
                        <span className="fee-label">Per Team</span>
                      </div>
                    </div>
                  </div>

                  <div className="category-notes">
                    <p>Players must be 50 years old & above to participate.</p>
                    <p>Open to players with any DUPR rating.</p>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {activeSection === 'register' && (
            <motion.div
              key="register"
              className="register-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Registration</h2>

              <div className="register-qr-cards">
                <div className="qr-card">
                  <h3>Junior</h3>
                  <img src="/images/junior.png" alt="Junior QR Code" className="qr-image" />
                  <a
                    href="https://sportssync.asia/tournament/94"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Click Here to Register
                  </a>
                </div>

                <div className="qr-card">
                  <h3>Adult & Senior</h3>
                  <img src="/images/adultsenior.png" alt="Adult & Senior QR Code" className="qr-image" />
                  <a
                    href="https://www.swp.solemas.com/tournament/tournament_tour_details/-/tournament_details/T1762907386540CMUJGJ4DXW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Click Here to Register
                  </a>
                </div>
              </div>

              <div className="register-benefits">
                <h3>Each registration will receive:</h3>
                <ul>
                  <li>1 X Tournament T-Shirt</li>
                  <li>Official DUPR Match Rating<br /><span>(All matches will be recorded in the DUPR System)</span></li>
                  <li>Malaysia Players Ranking</li>
                </ul>
              </div>
            </motion.div>
          )}

          {activeSection === 'prize' && (
            <motion.div
              key="prize"
              className="prize-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="prize-header">
                <h2>TOTAL PRIZE POOL Up To</h2>
                <div className="prize-amount">RM45,600</div>
              </div>

              <div className="prize-tables">
                <div className="prize-category">
                  <h3>JUNIOR</h3>
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>CHAMPION</th>
                        <th>2ND PLACE</th>
                        <th>3RD PLACE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Singles</td>
                        <td>RM100</td>
                        <td>–</td>
                        <td>–</td>
                      </tr>
                      <tr>
                        <td>Doubles</td>
                        <td>RM200</td>
                        <td>–</td>
                        <td>–</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="prize-category">
                  <h3>ADULT</h3>
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>CHAMPION</th>
                        <th>2ND PLACE</th>
                        <th>3RD PLACE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Singles</td>
                        <td>RM800</td>
                        <td>RM600</td>
                        <td>RM400</td>
                      </tr>
                      <tr>
                        <td>Doubles</td>
                        <td>RM1600</td>
                        <td>RM1200</td>
                        <td>RM800</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="prize-category">
                  <h3>SENIOR</h3>
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>CHAMPION</th>
                        <th>2ND PLACE</th>
                        <th>3RD PLACE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Singles</td>
                        <td>RM800</td>
                        <td>RM600</td>
                        <td>RM400</td>
                      </tr>
                      <tr>
                        <td>Doubles</td>
                        <td>RM1600</td>
                        <td>RM1200</td>
                        <td>RM800</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="prize-note">
                <p>EVERY PODIUM WINNER ARE ENTITLED FOR A</p>
                <p className="medals">GOLD • SILVER • BRONZE MEDAL</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {activeSection === 'home' && (
          <motion.div
            className="hero-images-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
          >
            <motion.div
              className="hero-right-image"
              initial={{ opacity: 0, x: 150, y: 100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.2, delay: 1.2 }}
            >
              <img src="/images/image1.png" alt="Tournament Right" />
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Hero;
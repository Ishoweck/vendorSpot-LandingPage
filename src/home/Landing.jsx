import styles from './BuyerLandingPage.module.css';
import { motion } from 'framer-motion';
import Lady from "../../src/assets/lady.svg"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const BuyerLandingPage = () => {
  return (
    <div className={styles.buyerLandingPage}>
      {/* Hero Section */}
      <motion.div
        className={styles.heroSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
      >
        {/* Left Side Text */}
        <motion.div className={styles.heroText} variants={fadeInUp} custom={0}>
          <div className={styles.startSellingSmarterContainer}>
            <motion.p className={styles.buyerLandingPageStartSellingSmarter} custom={0.1} variants={fadeInUp}>
              Start selling smarter
            </motion.p>
            <motion.p className={styles.buyerLandingPageStartSellingSmarter} custom={0.2} variants={fadeInUp}>
              on <i className={styles.vendorspot}>Vendorspot</i>
            </motion.p>
          </div>
          <motion.div className={styles.joinNigeriasTrustedContainer} custom={0.3} variants={fadeInUp}>
            <p>Join Nigeria’s trusted marketplace where your business is promoted,</p>
            <p>your payments are secured, and your customers are closer than ever.</p>
          </motion.div>
        </motion.div>

        {/* Right Side Image */}
        <motion.img
          src={Lady}
          alt="A Lady smiling"
          className={styles.heroImage}
          variants={fadeInUp}
          custom={0.4}
        />
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className={styles.statsSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          { number: '1000+', label: 'Active Vendors' },
          { number: '1200+', label: 'Product Sales' },
          { number: '1200+', label: 'Deliveries' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className={styles.statBlock}
            variants={fadeInUp}
            custom={index}
          >
            <div className={styles.statNumber}>{stat.number}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Feature Highlights */}
      <motion.div
        className={styles.featuresSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          {
            title: 'Stop Worrying About Logistics',
            text: 'Sell with peace of mind; we’ve got delivery covered.',
          },
          {
            title: 'Safe Payments, Always',
            text: 'Get paid only when customers confirm their orders.',
          },
          {
            title: 'Grow Beyond Social Media',
            text: 'Access thousands of ready buyers directly on Vendorspot.',
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className={styles.featureBlock}
            variants={fadeInUp}
            custom={index}
          >
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureText}>{feature.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        className={styles.createAStoreNowWrapper}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className={styles.createAStore}>
            <a style={{textDecoration:"none", color: "white", target:"_blank"}} href='https://www.vendorspotng.com/vendor-signup'>Create a store Now</a>
            
            
            </div>
      </motion.div>
    </div>
  );
};

export default BuyerLandingPage;

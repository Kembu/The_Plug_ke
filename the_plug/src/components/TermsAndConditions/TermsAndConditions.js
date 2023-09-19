// TermsAndConditions.js
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import myLogo from './the_plug_logo.jpg'

const styles = StyleSheet.create({
  // Define your CSS styles here using Aphrodite
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  h1: {
    fontSize: '24px',
  },
  h2: {
    fontSize: '20px',
  },
  p: {
    fontSize: '16px',
  },
});

const TermsAndConditions = () => {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.logo)}>
        <a href="/">
          <img
            src={myLogo}
            alt="The Plug Logo"
          />
        </a>
      </div>
      <div className={css(styles.container)}>
        <h1 className={css(styles.h1)}>Terms and Conditions</h1>
        <p className={css(styles.p)}>
          These terms and conditions ("Terms") govern your use of the Kenyan Review website and all content, services, and products provided by Kenyan Review.
        </p>
        <h2 className={css(styles.h2)}>1. Acceptance of Terms</h2>
        <p className={css(styles.p)}>
          By using this website, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use the website.
        </p>
        <h2 className={css(styles.h2)}>2. User Content</h2>
        <p className={css(styles.p)}>
          Users may post reviews and comments on the website. By posting content, you grant Kenyan Review the right to use, modify, and display your content on the website.
        </p>
        <h2 className={css(styles.h2)}>3. Privacy Policy</h2>
        <p className={css(styles.p)}>
          Your use of this website is also governed by our <a href="privacy-policy.html">Privacy Policy</a>. Please review the Privacy Policy to understand our practices.
        </p>
        <h2 className={css(styles.h2)}>4. Disclaimer</h2>
        <p className={css(styles.p)}>
          The content on this website is provided for informational purposes only. Kenyan Review does not endorse the accuracy or reliability of any user-generated content.
        </p>
        <h2 className={css(styles.h2)}>5. Contact Information</h2>
        <p className={css(styles.p)}>
          If you have any questions or concerns about these Terms, please contact us at info@kenyanreview.com.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;

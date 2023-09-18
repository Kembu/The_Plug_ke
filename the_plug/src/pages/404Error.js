import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const PageNotFound = () => {
  return (
    <body>
      <section className={css(styles.page_404)}>
        <div className={css(styles.container)}>
          <div className={css(styles.row)}>
            <div className={css(styles.col_sm_12)}>
              <div className={css(styles.col_sm_10, styles.col_sm_offset_1, styles.text_center)}>
                <div className={css(styles.four_zero_four_bg)}>
                  <h1 className={css(styles.text_center)}>404</h1>
                </div>
                <div className={css(styles.content_box_404)}>
                  <h3 className={css(styles.h2)}>Business Page Not Found</h3>
                  <a href="index.html" className={css(styles.link)}>Go Home</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
};

const styles = StyleSheet.create({
  page_404: {
    padding: '40px 0',
    background: '#fff',
    fontFamily: 'Poppins',
  },
  four_zero_four_bg: {
    background: 'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)',
    height: '400px',
    backgroundPosition: 'center',
    width: '100%',
  },
  text_center: {
    textAlign: 'center',
  },
  h2: {
    fontSize: '80px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    padding: '10px 20px',
    background: '#39ac31',
    display: 'inline-block',
  },
});

export const PageNotFoundFragment = PageNotFound;

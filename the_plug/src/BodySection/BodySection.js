import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  mainBody: {
    textAlign: 'center',
    backgroundColor: '#ffffff',
  },
  weeklyPicksContainer: {
    alignItems: 'center',
    textAlign: 'center',
  },
  weeklyPicksList: {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
    justifyContent: 'space-around',
  },
  weeklyPicksItem: {
    flex: 1,
    margin: '10px',
    padding: '10px',
    textAlign: 'center',
  },
  weeklyPicksLink: {
    textDecoration: 'none',
    color: '#0077cc',
    fontWeight: 'bold',
    display: 'block',
  },
  weeklyPicksLinkHover: {
    textDecoration: 'underline',
    color: '#0055aa',
  },
  weeklyPicksImage: {
    maxWidth: '100%',
    height: '450px',
    display: 'block',
    margin: '0 auto',
  },
  topPicksLink: {
    color: 'black',
    textDecoration: 'none',
  },
  reviewList: {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
  },
  reviewListItem: {
    margin: '10px',
    border: '1px solid #ccc',
    padding: '10px',
  },
  reviewImage: {
    width: '40%',
    height: 'auto',
  },
  reviewLink: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
  },
  reviewLinkHover: {
    textDecoration: 'underline',
    color: '#0055aa',
  },
});

class BodySection extends Component {
  render() {
    return (
      <div>
        <section className={css(styles.mainBody)}>
          <div className={css(styles.weeklyPicksContainer)}>
            <a href="./top-picks.html" className={css(styles.topPicksLink)}>
              <h2 className={css(styles.heading)}>Top Picks Of The Week</h2>
            </a>
            <ul className={css(styles.weeklyPicksList)}>
              <li className={css(styles.weeklyPicksItem)}>
                <a href="top-picks.html" className={css(styles.weeklyPicksLink)}>
                  <img
                    src="./restaurant_2.jpg"
                    alt="Restaurants with offers"
                    className={css(styles.weeklyPicksImage)}
                  />
                  <h3>Restaurants with offers</h3>
                </a>
              </li>
              <li className={css(styles.weeklyPicksItem)}>
                <a href="top-picks.html" className={css(styles.weeklyPicksLink)}>
                  <img
                    src="./movie_things.jpg"
                    alt="Movie discount"
                    className={css(styles.weeklyPicksImage)}
                  />
                  <h3>Movie discounts</h3>
                </a>
              </li>
              <li className={css(styles.weeklyPicksItem)}>
                <a href="top-picks.html" className={css(styles.weeklyPicksLink)}>
                  <img
                    src="./concert.jpg"
                    alt="Events of the week"
                    className={css(styles.weeklyPicksImage)}
                  />
                  <h3>Events of the week</h3>
                </a>
              </li>
            </ul>
          </div>

          <div className={css(styles.reviews)}>
            <h2 className={css(styles.heading)}>User Reviews</h2>
            <ul className={css(styles.reviewList)}>
              <li className={css(styles.reviewListItem)}>
                <a
                  href="https://www.carrefour.ke/mafken/en/"
                  target="_blank"
                  className={css(styles.reviewLink)}
                >
                  <h2>Carrefour</h2>
                </a>
                <img
                  src="./Shopping_Cart.jpg"
                  alt="Shopping Cart"
                  className={css(styles.reviewImage)}
                />
                <h3>Terry</h3>
                I got the best deal at Carrefour yesterday when they posted their
                offers on the app. I saved half the amount!
              </li>
              <li className={css(styles.reviewListItem)}>
                <a
                  href="https://www.artcaffe.co.ke/"
                  target="_blank"
                  className={css(styles.reviewLink)}
                >
                  <h2>Art Caffe</h2>
                </a>
                <img
                  src="./Cofee_Mug.jpg"
                  alt="Coffee Mug"
                  className={css(styles.reviewImage)}
                />
                <h3>Hillary</h3>
                I ordered the salt caramel cake and a latte, and the customer
                service was really good.
              </li>
              <li className={css(styles.reviewListItem)}>
                <a
                  href="https://linktr.ee/BlanketsnWine?fbclid=PAAaYV5S63feEFTHeE1HlS5-O_f0mKQYUmdXUb8BsDuIhr4CFv6T0JGz3TEho_aem_AQYr3Ii30QCeYoBoEI0MH7BqBu7A5nCjq8W6reo0CD64cr9_9bj2SmhsLJKb60mhbFM"
                  target="_blank"
                  className={css(styles.reviewLink)}
                >
                  <h2>Kinoti’s EP listening party</h2>
                </a>
                <img
                  src="./Microphone.jpg"
                  alt="Microphone"
                  className={css(styles.reviewImage)}
                />
                <h3>Anita</h3>
                This listening party was mad vibes, I love the ambiance and
                meeting cool people with my music taste.
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default BodySection;

import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    mainBody: {
      textAlign: 'center',
      backgroundColor: '#ffffff',
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
  
  class BusinessReviews extends Component {
    // componentDidMount() {
    //   document.title = 'Reviews'; 
    // }
    render() {
      return (
        <div>
          <section className={css(styles.mainBody)}>         
  
            <div className={css(styles.reviews)}>
            <a href="/BusinessReviewsPage" className={css(styles.reviewLink)}>
              <h2>Business Reviews</h2>
            </a>
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
              <ul className={css(styles.reviewList)}>
                <li className={css(styles.reviewListItem)}>
                  <a
                    href="https://fbskitchenware.co.ke/"
                    target="_blank"
                    className={css(styles.reviewLink)}
                  >
                    <h2>China Square</h2>
                  </a>
                  <img
                    src="./utensils.jpg"
                    alt="utensils"
                    className={css(styles.reviewImage)}
                  />
                  <h3>Mason</h3>
                  I got one of the best deals at Kitchenware. The forks and spoons were 
                  relatively cheap compared to other places. 
                </li>
                <li className={css(styles.reviewListItem)}>
                  <a
                    href="https://cinema.angacinemas.com/"
                    target="_blank"
                    className={css(styles.reviewLink)}
                  >
                    <h2>Anga Imax</h2>
                  </a>
                  <img
                    src="./movies.jpg"
                    alt="movies"
                    className={css(styles.reviewImage)}
                  />
                  <h3>Hilda</h3>
                  The popcorn was delicious and the prices were friendly. I Really enjoyed.
                </li>
                <li className={css(styles.reviewListItem)}>
                  <a
                    href="https://mydawa.com/"
                    target="_blank"
                    className={css(styles.reviewLink)}
                  >
                    <h2>My Dawa</h2>
                  </a>
                  <img
                    src="./pharmacy_icon.jpg"
                    alt="Pharmacy"
                    className={css(styles.reviewImage)}
                  />
                  <h3>Kevin</h3>
                  The drugs were delivered at my house at night. Very convenient and customer service
                  are the best. 
                </li>
              </ul>
            </div>
          </section>
        </div>
      );
    }
  }
  
  export default BusinessReviews;
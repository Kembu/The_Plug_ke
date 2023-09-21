import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  mainBody: {
    textAlign: "center",
    backgroundColor: "#ffffff",
  },
  weeklyPicksContainer: {
    alignItems: "center",
    textAlign: "center",
  },
  weeklyPicksList: {
    display: "flex",
    flexDirection: "row",
    listStyle: "none",
    justifyContent: "space-around",
  },
  weeklyPicksItem: {
    flex: 1,
    margin: "10px",
    padding: "10px",
    textAlign: "center",
  },
  weeklyPicksLink: {
    textDecoration: "none",
    color: "#0077cc",
    fontWeight: "bold",
    display: "block",
    ":hover": {
      textDecoration: "underline",
      color: "#0055aa",
    },
  },
  weeklyPicksImage: {
    maxWidth: "100%",
    height: "450px",
    display: "block",
    margin: "0 auto",
  },
  topPicksLink: {
    color: "black",
    textDecoration: "none",
  },
});

class TopPicks extends Component {
  componentDidMount() {
    document.title = "Top Picks";
  }
  render() {
    return (
      <div>
        <section className={css(styles.mainBody)}>
          <div className={css(styles.weeklyPicksContainer)}>
            <a href="/topPicksPage" className={css(styles.topPicksLink)}>
              <h2 className={css(styles.heading)}>Top Picks Of The Week</h2>
            </a>
            <ul className={css(styles.weeklyPicksList)}>
              <li className={css(styles.weeklyPicksItem)}>
                <a
                  href="https://www.tiktok.com/@nairobidisclosure?_t=8frtcG6mtYE&_r=1"
                  target="_blank"
                  className={css(styles.weeklyPicksLink)}
                >
                  <img
                    src="./restaurant_2.jpg"
                    alt="Restaurants with offers"
                    className={css(styles.weeklyPicksImage)}
                  />
                  <h3>Restaurants with offers</h3>
                </a>
              </li>
              <li className={css(styles.weeklyPicksItem)}>
                <a
                  href="https://cinema.angacinemas.com/schedule"
                  target="_blank"
                  className={css(styles.weeklyPicksLink)}
                >
                  <img
                    src="./movie_things.jpg"
                    alt="Movie discount"
                    className={css(styles.weeklyPicksImage)}
                  />
                  <h3>Movie discounts</h3>
                </a>
              </li>
              <li className={css(styles.weeklyPicksItem)}>
                <a
                  href="https://allevents.in/nairobi/music"
                  target="_blank"
                  className={css(styles.weeklyPicksLink)}
                >
                  <img
                    src="./concert.jpg"
                    alt="Events of the week"
                    className={css(styles.weeklyPicksImage)}
                  />
                  <h3>Events of the week</h3>
                </a>
              </li>
            </ul>
            <ul className={css(styles.weeklyPicksList)}>
              <li className={css(styles.weeklyPicksItem)}>
                <a
                  href="https://mydawa.com/"
                  target="_blank"
                  className={css(styles.weeklyPicksLink)}
                >
                  <img
                    src="./Pharmacy.jpg"
                    alt="Online Pharmacy"
                    className={css(styles.weeklyPicksImage)}
                  />
                  <h3>Online Pharmacy</h3>
                </a>
              </li>
              <li className={css(styles.weeklyPicksItem)}>
                <a
                  href="https://www.kaiandkaro.com/"
                  target="_blank"
                  className={css(styles.weeklyPicksLink)}
                >
                  <img
                    src="./Cars.jpg"
                    alt="Car Sales"
                    className={css(styles.weeklyPicksImage)}
                  />
                  <h3>Car Sales</h3>
                </a>
              </li>
              <li className={css(styles.weeklyPicksItem)}>
                <a
                  href="https://www.tacc.co.ke/product-cat/furniture-homeware/kitchenware/tableware/crockery-cutlery/"
                  target="_blank"
                  className={css(styles.weeklyPicksLink)}
                >
                  <img
                    src="./Cutlery.jpg"
                    alt="Cutlery one stop shop"
                    className={css(styles.weeklyPicksImage)}
                  />
                  <h3>Cutlery one stop shop</h3>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default TopPicks;

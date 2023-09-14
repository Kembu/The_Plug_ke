import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { StyleSheet, css } from 'aphrodite';

class Header extends Component {
  render() {
    const styles = StyleSheet.create({
      header: {
        fontFamily: 'poppins',
        scrollBehavior: 'smooth',
      },
      navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: '20px',
        marginBottom: '20px',
      },
      logo: {
        maxWidth: '150px', // Adjust this value as needed to make the logo smaller
        paddingRight: '20px',
        overflow: 'hidden',
      },
      logoImg: {
        maxWidth: '100%',
        height: 'auto',
      },
      menu: {
        display: 'flex',
        justifyContent: 'flex-end',
        listStyle: 'none',
        padding: '0',
        margin: '0',
      },
      menuItem: {
        marginLeft: '10px',
        padding: '10px',
        fontSize: '20px',
      },
      menuLink: {
        textDecoration: 'none',
        color: '#333',
      },
      menuLinkHover: {
        backgroundColor: '#3EB489',
        color: 'white',
        padding: '10px',
      },
      searchBar: {
        display: 'flex',
        border: '1px solid #000000',
        borderRadius: '8px',
        padding: '8px',
      },
      searchInput: {
        border: 'none',
        outline: 'none',
        flexGrow: '1',
        padding: '4px',
      },
      searchButton: {
        backgroundColor: '#3EB489',
        color: '#ffffff',
        border: 'none',
        borderRadius: '0 4px 4px 0',
        padding: '4px 8px',
        cursor: 'pointer',
      },
    });

    return (
      <header className={css(styles.header)}>
        <div className={css(styles.navbar)}>
          <div className={css(styles.logo)}>
            <a href="./index.html">
              <img
                className={css(styles.logoImg)}
                src="/the_plug_logo.jpg"
                alt="The Plug Logo"
              />
            </a>
          </div>

          <div className={css(styles.searchBar)}>
            <input
              type="text"
              placeholder="Search..."
              className={css(styles.searchInput)}
            />
            <button className={css(styles.searchButton)}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          <button className="menu-button">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        <ul className={css(styles.menu)}>
          <li className={css(styles.menuItem)}>
            <a
              className={css(styles.menuLink)}
              href="./review.html"
            >
              Write a review
            </a>
          </li>
          <li className={css(styles.menuItem)}>
            <a
              className={css(styles.menuLink)}
              href="./login.html"
            >
              Login
            </a>
          </li>
          <li className={css(styles.menuItem)}>
            <a
              className={css(styles.menuLink)}
              href="./signup.html"
            >
              Signup
            </a>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;

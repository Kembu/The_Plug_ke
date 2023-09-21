import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { StyleSheet, css } from 'aphrodite';

class ReviewHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false, // Initial state for the menu button
    };
  }

  // Function to toggle the menu state
  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

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
      searchBar: {
        display: 'flex',
        border: '1px solid #000000',
        borderRadius: '8px',
        padding: '8px',
      },
      searchInput: {
        border: 'none',
        outline: 'none',
        flexGrow: 1,
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
      menu: {
        display: 'flex',
        listStyle: 'none', // Remove default list styles
        justifyContent: 'flex-end',
      },
      menuItem: {
        margin: '10px',
        padding: '10px',
        fontSize: '20px',
      },
      menuLink: {
        color: '#333',  // Default text color
        padding: '5px',  // Default padding
        textDecoration: 'none',  // Remove default text underline
        ":hover": {
          backgroundColor: '#3EB489',
          color: '#ffffff',
          padding: '10px',
          textDecorationColor: '#3EB489',
          },
      },  
    });

    return (
      <header className={css(styles.header)}>
        <div className={css(styles.navbar)}>
          <div className={css(styles.logo)}>
            <a href="/">
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

          {/* Conditionally render the menu button for smaller screens */}
          {window.innerWidth <= 768 && (
            <button
              className="menu-button"
              onClick={this.toggleMenu}
              style={{
                display: 'block',
              }}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          )}    

          {/* Conditionally render the menu items based on screen size */}
          {window.innerWidth <= 768 ? (
            this.state.isMenuOpen ? (
              <div className={css(styles.menuContainer)}>
                <ul className={css(styles.menu)}>
                  <li className={css(styles.menuItem)}>
                    <a
                      className={css(styles.menuLink)}
                      href="./login"
                    >
                      Login
                    </a>
                  </li>
                  <li className={css(styles.menuItem)}>
                    <a
                      className={css(styles.menuLink)}
                      href="./signup"
                    >
                      Signup
                    </a>
                  </li>
                </ul>
              </div>
            ) : null
          ) : (
            <ul className={css(styles.menu)}>
              <li className={css(styles.menuItem)}>
                <a
                  className={css(styles.menuLink)}
                  href="./login"
                >
                  Login
                </a>
              </li>
              <li className={css(styles.menuItem)}>
                <a
                  className={css(styles.menuLink)}
                  href="./signup"
                >
                  Signup
                </a>
              </li>
            </ul>
          )}
        </div>
      </header>
    );
  }
}

export default ReviewHeader;

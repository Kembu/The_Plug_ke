import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

// Define your CSS styles using Aphrodite
const styles = StyleSheet.create({
  body: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    overflow: 'hidden',
  },
  container: {
    textAlign: 'center',
    background: 'black',
    borderRadius: '50px',
    borderTop: '10px solid #f370b8',
    borderBottom: '10px solid #f370b8',
    width: '400px',
  },
  box: {
    fontFamily: '"Source Sans Pro", sans-serif',
    color: '#ffffff',
    fontSize: '20px',
  },
  // Add more styles here as needed
});

class SignUp extends Component {
  componentDidMount() {
    document.title = 'Sign Up'; 
  }
  render() {
    return (
      <div className={css(styles.body)}>
        <div className={css(styles.container)}>
          <form name="form1" className={css(styles.box)} method="post">
            <h4 className={css(styles.box, styles.h4)}>Sign Up</h4>
            <h5 className={css(styles.box, styles.h5)}>Create your account.</h5>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              autoComplete="off"
              className={css(styles.box, styles.input)}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              autoComplete="off"
              className={css(styles.box, styles.input)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="pwd"
              autoComplete="off"
              className={css(styles.box, styles.input)}
            />
            <input
              type="submit"
              value="Sign Up"
              className={css(styles.box, styles.btn1)}
            />
            <p>
              Already have an account? <a href="login.html">Log In</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
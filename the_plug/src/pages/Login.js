import React, { Component } from 'react';
import { StyleSheet, css, } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    background: 'black',
    borderRadius: '40px',
    borderTop: '10px solid #f370b8',
    borderBottom: '10px solid #f370b8',
    width: '400px',
    height: '500px',
  },
  box: {
    fontFamily: '"Source Sans Pro", sans-serif',
    color: '#ffffff',
    padding: '20px',
    margin: '0 auto',
    width: '320px',
  },
  h4: {
    fontSize: '20px',
    marginTop: '94px',
    color: '#f370b8',
  },
  h5: {
    fontFamily: '"Source Sans Pro", sans-serif',
    fontSize: '13px',
    color: '#ffffff',
    letterSpacing: '1.5px',
    marginTop: '-15px',
    marginBottom: '70px',
  },
  input: {
    display: 'block',
    margin: '20px auto',
    backgroundColor: '#3b4148',
    border: '0',
    borderRadius: '5px',
    padding: '14px 10px',
    width: '320px',
    outline: '0',
    color: '#ffffff',
    transition: 'all 0.2s ease-out',
    '::placeholder': {
      color: '#ffffff',
    },
    ':focus': {
      border: '1px solid #79a6fe',
    },
  },
  a: {
    color: '#f370b8',
    textDecoration: 'none',
    ':hover': {
      color: '#129aa1',
    },
  },
  btn1: {
    border: '0',
    background: '#f370b8',
    color: '#dfdeee',
    borderRadius: '7px',
    width: '340px',
    height: '49px',
    fontSize: '16px',
    transition: '0.3s',
    cursor: 'pointer',
    marginTop: '20px',
    ':hover': {
      background: '#129aa1',
    },
  },
  forgetpass: {
    position: 'relative',
    float: 'right',
    right: '28px',
  },
});

class Login extends Component {
  componentDidMount() {
    document.title = 'Login Page'; 
  }
  render() {
    return (
      <div className={css(styles.container)}>
        <form name="form1" className={css(styles.box)} method="post">
          <h4 className={css(styles.h4)}>Login</h4>
          <h5 className={css(styles.h5)}>Sign in to your account.</h5>
          <input
            type="text"
            name="email"
            placeholder="Email"
            autoComplete="off"
            className={css(styles.input)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="pwd"
            autoComplete="off"
            className={css(styles.input)}
          />
          <a href="#" className={css(styles.forgetpass)}>
            Forgot Password?
          </a>
          <input type="submit" value="Log In" className={css(styles.btn1)} />
          <p>
            Don't have an account? <a href="signup.html" className={css(styles.a)}>Sign Up</a>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
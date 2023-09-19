import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";

// Define your CSS styles using Aphrodite
const styles = StyleSheet.create({
  body: {
    fontFamily: '"Source Sans Pro", sans-serif',
    background: 'url("./background.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "#ffffff",
    fontSize: "20px",
    margin: "0",
    minHeight: "100vh", // Ensure the body covers the entire viewport height
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    background: "black",
    borderRadius: "70px",
    borderTop: "10px solid #f370b8",
    borderBottom: "10px solid #f370b8",
    width: "400px",
    padding: "20px",
    height: "500px",
    boxSizing: "border-box",
  },

  boxH4: {
    fontFamily: '"Source Sans Pro", sans-serif',
    color: "#f370b8",
    fontSize: "40px",
    marginTop: "100px",
  },

  boxH5: {
    fontFamily: '"Source Sans Pro", sans-serif',
    fontSize: "10px",
    color: "#ffffff",
    letterSpacing: "1.5px",
    marginTop: "-80px",
    marginBottom: "70px",
  },

  boxInput: {
    display: "block",
    margin: "20px auto",
    backgroundColor: "#3b4148",
    border: "0",
    borderRadius: "5px",
    padding: "14px 10px",
    width: "100%",
    outline: "0",
    color: "#ffffff",
    transition: "all 0.2s ease-out",
  },

  inputPlaceholder: {
    color: "#ffffff",
  },

  boxInputFocus: {
    border: "1px solid #79a6fe",
  },

  fullNameInput: {
    marginTop: "40px",
  },

  link: {
    color: "#f370b8",
    textDecoration: "none",
  },

  linkHover: {
    color: "#129aa1",
  },

  btn1: {
    border: "0",
    background: "#f370b8",
    color: "#dfdeee",
    borderRadius: "7px",
    width: "340px",
    height: "49px",
    fontSize: "16px",
    transition: "0.3s",
    cursor: "pointer",
    marginTop: "20px",
  },

  btn1Hover: {
    background: "#129aa1",
  },

  // forgetPass: {
  //   position: 'relative',
  //   float: 'right',
  //   right: '28px',
  // },
});

class SignUp extends Component {
  componentDidMount() {
    document.title = "Sign Up";
  }
  render() {
    return (
      <div className={css(styles.body)}>
        <div className={css(styles.container)}>
          <form name="form1" className={css(styles.box)} method="post">
            <h4 className={css(styles.boxH4)}>Sign Up</h4>
            <h5 className={css(styles.boxH5)}>Create your account.</h5>
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
              className={css(styles.forgetPass)}
            />
            <input type="submit" value="Sign Up" className={css(styles.btn1)} />
            <p>
              Already have an account?{" "}
              <a href="http://localhost:3000/login" className="link">
                Log In
              </a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;

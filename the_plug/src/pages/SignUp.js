import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  body: {
    fontFamily: '"Source Sans Pro", sans-serif',
    background: 'url("./background.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "#ffffff",
    fontSize: "20px",
    margin: "0",
    minHeight: "100vh",
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
    margin: "5px",
  },

  boxH5: {
    fontFamily: '"Source Sans Pro", sans-serif',
    fontSize: "15px",
    color: "#ffffff",
    letterSpacing: "1.5px",
    marginBottom: "20px",
  },

  boxInput: {
    display: "block",
    margin: "20px auto",
    backgroundColor: "#3b4148",
    border: "0",
    borderRadius: "5px",
    padding: "14px 10px",
    width: "95%",
    outline: "0",
    color: "#ffffff",
    transition: "all 0.2s ease-out",
    "::placeholder": {
      color: "#ffffff",
    },
    ":focus": {
      border: "1px solid #79a6fe",
    },
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
    borderRadius: "10px",
    width: "340px",
    height: "49px",
    fontSize: "16px",
    transition: "0.3s",
    cursor: "pointer",
    margin: "10px",
    ":hover": {
      background: "#129aa1",
    },
  },
  theLink: {
    color: "#f370b8",
    textDecoration: "none",
    ":hover": {
      color: "#129aa1",
    },
  },
});

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      registrationMessage: "",
    };
  }

  componentDidMount() {
    document.title = "Sign Up";
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
        }),
      });

      if (response.status === 201) {
        this.setState({ registrationMessage: 'User registered successfully' });
      } else {
        let errorMessage = 'Registration failed.';
        if (response.status === 400) {
          const data = await response.json(); // Parse JSON response
          errorMessage += ` Error code: ${response.status}, Message: ${data.message}`;
        } else {
          errorMessage += ` Error code: ${response.status}`;
          // console.log(`something`);
        }
        this.setState({ registrationMessage: errorMessage });
      }
    } catch (error) {
      console.error(error);
      this.setState({ registrationMessage: 'Server error. Please try again later.' });
    }
  };

  render() {
    return (
      <div className={css(styles.body)}>
        <div className={css(styles.container)}>
          <form
            name="form1"
            className={css(styles.formContainer)}
            onSubmit={this.handleSubmit}
          >
            <h4 className={css(styles.boxH4)}>Sign Up</h4>
            <h5 className={css(styles.boxH5)}>Create your account.</h5>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              autoComplete="off"
              className={css(styles.boxInput)}
              onChange={this.handleInputChange}
              required
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              autoComplete="off"
              className={css(styles.boxInput)}
              onChange={this.handleInputChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="pwd"
              autoComplete="off"
              className={css(styles.boxInput)}
              onChange={this.handleInputChange}
              required
            />
            <input
              type="submit"
              value="Sign Up"
              className={css(styles.btn1)}
            />
            <p>
              Already have an account?{" "}
              <a href="http://localhost:3000/login" className={css(styles.theLink)}>
                Log In
              </a>
            </p>
            {this.state.registrationMessage && (
              <p>{this.state.registrationMessage}</p>
            )}
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
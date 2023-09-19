import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faGlobe, faStar } from "@fortawesome/free-solid-svg-icons";

const styles = StyleSheet.create({
  heading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    width: "50%",
  },
  container: {
    marginTop: "20px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    backgroundColor: "#3EB489",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "30px",
  },
  wideInput: {
    width: "100%",
  },
  textarea: {
    width: "50%",
    height: "200px",
    overflow: "hidden",
    marginTop: "20px",
    marginBottom: "20px",
  },
  text: {
    height: "100%",
    width: "100%",
    outline: "none",
    color: "#eee",
    border: "1px solid #333",
    background: "#222",
    padding: "10px",
    fontSize: "17px",
    resize: "none",
  },
  textareaHover: {
    cursor: "pointer",
    backgroundColor: "#eeeeee",
  },
  textareaFocus: {
    cursor: "text",
    color: "#333333",
    backgroundColor: "white",
    borderColor: "#333333",
  },
  btn: {
    height: "45px",
    width: "100%",
    margin: "15px 0",
  },
  btnButton: {
    border: "1px solid #444",
    outline: "none",
    background: "#222",
    color: "#999",
    fontSize: "17px",
    fontWeight: 500,
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginTop: "20px",
  },
  btnButtonHover: {
    background: "#1b1b1b",
  },

});
class CommentSection extends Component {
  render() {
    return (
      <div className={css(styles.commentSection)}>
        <div className={css(styles.heading)}>
          <h2>REVIEW PAGE</h2>
        </div>
        <form action="#">
          <div className={css(styles.container)}>
            <div className={css(styles.business)}>
              <div className={css(styles.businessName)}>
                <label className={css(styles.businessName)}>
                  Enter a business name
                  <button>
                    <i FontAwesomeIcon icon={faBuilding}></i>
                  </button>
                </label>
                <input type="text" name="business_name" className={css(styles.wideInput)} autoComplete="off" />
              </div>
              <div className={css(styles.businessLink)}>
                <label className={css(styles.businessLink)}>
                  Enter a business link
                  <button>
                    <i FontAwesomeIcon icon={faGlobe}></i>
                  </button>
                </label>
                <input type="text" name="business_link" className={css(styles.wideInput)} autoComplete="off" />
              </div>
            </div>
            <div className={css(styles.textarea)}>
              <textarea className={css(styles.text)} name="name" rows="5"  cols="80" placeholder="Leave a review here..."></textarea>
            </div>
            <div className={css(styles.wrapper)}>
              <div className={css(styles.rating)}>
                <input type="radio" name={css(styles.rating)} id="rate-1" />
                <label htmlFor="rate-1" className="fas fa-star"><i FontAwesomeIcon icon={faStar}></i></label>
                <input type="radio" name={css(styles.rating)} id="rate-2" />
                <label htmlFor="rate-2" className="fas fa-star"><i FontAwesomeIcon icon={faStar}></i></label>
                <input type="radio" name={css(styles.rating)} id="rate-3" />
                <label htmlFor="rate-3" className="fas fa-star"><i FontAwesomeIcon icon={faStar}></i></label>
                <input type="radio" name={css(styles.rating)} id="rate-4" />
                <label htmlFor="rate-4" className="fas fa-star"><i FontAwesomeIcon icon={faStar}></i></label>
                <input type="radio" name={css(styles.rating)} id="rate-5" />
                <label htmlFor="rate-5" className="fas fa-star"><i FontAwesomeIcon icon={faStar}></i></label>
              </div>
            </div>
            <div className={css(styles.btn)}>
              <button type="submit" className={css(styles.btnButton)}>Post</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentSection;

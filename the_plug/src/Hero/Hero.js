import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
    hero: {
        backgroundImage: `url("./Nairobi_skyline.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        height: 'fit-content',
        textAlign: 'left',
        padding: '200px',
        color: '#fff',
        marginTop: '20px',
      },
      heroText: {
        fontSize: '30px',
        textAlign: 'left',
        marginBottom: '40px',
    },
});

class Hero extends Component {
    render() {
        return (
            <div>
                <section>
                    <div className={css(styles.hero)}>
                        <p className={css(styles.heroText)}>
                            The Plug Ke offers users an immersive experience to explore and
                            support the diverse tapestry of businesses that make Kenya truly
                            special
                        </p>
                    </div>
                </section>
            </div>
        )
    }
}

export default Hero;
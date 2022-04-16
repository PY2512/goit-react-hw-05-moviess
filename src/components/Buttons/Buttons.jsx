import React from "react";
import PropTypes from "prop-types";
import styles from "./buttons.module.css";

function Buttons (props) {
    return (
        <section className={styles.buttonSection}>
            <button className={styles.button} type="button" id="good" onClick={props.handleIncrement}>Good</button>
            <button className={styles.button} type="button" id="neutral" onClick={props.handleIncrement}>Neutral</button>
            <button className={styles.button} type="button" id="bad" onClick={props.handleIncrement}>Bad</button>
        </section>
    );
};

Buttons.propTypes = {
    handleIncrement: PropTypes.PropTypes.func.isRequired,
};

export default Buttons;
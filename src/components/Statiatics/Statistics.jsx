import React from 'react';
import PropTypes from 'prop-types';
import style from './statistics.module.css'

function Statistics (props) {
    return (
        <div>
            <h2 className={style.statisticHead}>Statistics</h2>
            <div>
                <span className={style.statisticSpan}>Good={props.good}</span>
                <span className={style.statisticSpan}>Neutral={props.neutral}</span>
                <span className={style.statisticSpan}>Bad={props.bad}</span>
            </div>
            <h3>Total={props.countTotalFeedback()}</h3>
            <p>Positive={props.countPositiveFeedbackPercentage()}</p>
        </div>
    )
};


Statistics.propTypes = {
    countTotalFeedback: PropTypes.func.isRequired,
    countPositiveFeedbackPercentage: PropTypes.func.isRequired,
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

export default Statistics;

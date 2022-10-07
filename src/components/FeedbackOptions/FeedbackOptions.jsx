import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    onLeaveFeedback = 1
    return (
        <div>
            <button onClick={options}>Good</button>
            <button onClick={options}>Neutral</button>
            <button onClick={options}>Bad</button>
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.func,
    onLeaveFeedback: PropTypes.bool
  };
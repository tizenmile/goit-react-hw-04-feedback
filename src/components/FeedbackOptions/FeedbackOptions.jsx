export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    onLeaveFeedback = 1
    // .setState
    // const { good, neutral, bad } = onLeaveFeedback;
    return (
        <div>
            <button onClick={options}>Good</button>
            <button onClick={options}>Neutral</button>
            <button onClick={options}>Bad</button>
        </div>
    )
}

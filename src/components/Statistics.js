import css from "../App.module.css";

export const Statistics = ({ good, bad, neutral, total, positivePercentage, messsage }) => {
    if (total === 0) {
        return (
            <p>{messsage}</p>
    )
}
    return (
        <div className={css.statistics}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
    </div>
    )
};
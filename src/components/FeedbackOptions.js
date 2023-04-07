import css from "../App.module.css";


export const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div className={css.block}>
    <button onClick={() => onLeaveFeedback("good")} className={css.button}>
      Good
    </button>
    <button onClick={() => onLeaveFeedback("neutral")} className={css.button}>
      Neutral
    </button>
    <button onClick={() => onLeaveFeedback("bad")} className={css.button}>
      Bad
    </button>
  </div>
);

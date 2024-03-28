const Feedback = ({ options, totalValue, positivePercentageOfFeedbacks }) => {
  return (
    <div>
      <ul>
        <li>
          <p>Good: {options.good}</p>
        </li>
        <li>
          <p>Neutral: {options.neutral}</p>
        </li>
        <li>
          <p>Bad: {options.bad}</p>
        </li>
        <li>
          <p>Total: {totalValue}</p>
        </li>
        <li>
          <p>Positive: {positivePercentageOfFeedbacks()}%</p>
        </li>
      </ul>
    </div>
  );
};

export default Feedback;

import s from "./Options.module.css";

const Options = ({ data, updateFeedback, totalFeedbacks, handleReset }) => {
  return (
    <div className={s.options_box}>
      {data.map((btn) => (
        <button onClick={() => updateFeedback(btn)} key={btn}>
          {btn}
        </button>
      ))}
      {totalFeedbacks > 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
};

export default Options;

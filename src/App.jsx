import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const data = ["good", "neutral", "bad"];
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedback, setFeedback] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem("feedback-data"));
    if (savedData) {
      return savedData;
    }
    return initialState;
  });

  useEffect(() => {
    window.localStorage.setItem("feedback-data", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const handleReset = () => {
    setFeedback(initialState);
  };

  const positivePercentageOfFeedbacks = () => {
    return Math.round(
      ((feedback.good + feedback.neutral) / totalFeedbacks) * 100
    );
  };

  const totalFeedbacks = feedback.good + feedback.neutral + feedback.bad;

  return (
    <>
      <Description />
      <Options
        data={data}
        updateFeedback={updateFeedback}
        totalFeedbacks={totalFeedbacks}
        handleReset={handleReset}
      />
      {totalFeedbacks > 0 ? (
        <Feedback
          options={feedback}
          totalValue={totalFeedbacks}
          positivePercentageOfFeedbacks={positivePercentageOfFeedbacks}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;

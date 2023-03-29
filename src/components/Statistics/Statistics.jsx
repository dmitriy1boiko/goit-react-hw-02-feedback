import { WrapperStaistic } from "./Statistics.styled";

export default function Statistics({ good, neutral, bad, total, positivePercentage}) {
  return (
  <WrapperStaistic>

        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
        <p>Total:{total}</p>
        <p>Positeve fidbak:{positivePercentage}</p>
  </WrapperStaistic>);
};
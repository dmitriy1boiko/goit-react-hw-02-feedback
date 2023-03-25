import { BtnContainer, Button } from "./FeedbackOptions.styled";

export default function FeedbackOptions({good, neutral,bad}) {
  return (
        <BtnContainer>
          <Button onClick={good}>Good</Button>
          <Button onClick={neutral}>Neutral</Button>
          <Button onClick={bad}>Bad</Button>
        </BtnContainer>
  );
};
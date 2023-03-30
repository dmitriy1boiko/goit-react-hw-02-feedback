import { BtnContainer, Button } from './FeedbackOptions.styled';

export default function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <BtnContainer>
      {options.map((option) => (
        <Button key={option} onClick={() => onLeaveFeedback( option )}>
          {option}
        </Button>
       ))}
    </BtnContainer>
  );
}

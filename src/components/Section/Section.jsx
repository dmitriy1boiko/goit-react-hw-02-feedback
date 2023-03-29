import { Title } from "./Section.styled";


export default function Section({title, children}) {
  return (
    <>
      <Title>{title}</Title>
      {children}
    </>
  );
}
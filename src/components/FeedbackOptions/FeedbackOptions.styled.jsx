import styled from 'styled-components'

export const BtnContainer = styled.div`
display: flex;
gap: 10px;
margin-top:20px;
`;
export const Button = styled.button`
  width: 100px;
  height: 50px;
  font-size: 15px;
  font-weight: 800;
  text-transform: uppercase;
  background: lightblue;
  border: 1px solid;
  border-radius: 50px;
  cursor: pointer;
  &:hover,
  &:focus {
    background: teal;
  }
`;
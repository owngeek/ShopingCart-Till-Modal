import styled from"styled-components"
export const ButtonContainer = styled.button`
  margin: 15px 50px 0px 0px;
  float: right;
  border: solid 1px var(--MainWhite);
  border-radius: 5px;
  padding: 8px 15px;
  transition: all 1s linear;
  cursor: pointer;
  background:transparent !important;

  i{ color: var(--MainWhite); padding-right: 15px; font-size: 20px; transition: all 1s linear;}
  span{color:var(--MainWhite); transition: all 1s linear;}
  &:hover{
    border: solid 1px var(--LightBlue); 
  }
  &:hover i {color:var(--LightBlue)}
  &:hover span {color:var(--LightBlue)}
`
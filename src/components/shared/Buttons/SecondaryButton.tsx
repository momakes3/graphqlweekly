import styled from '../../style/styled'

export const SecondaryButton = styled.button`
  border: none;
  outline: none;

  font-weight: 500;
  line-height: 1;
  font-size: 18px;
  text-align: right;
  background: none;

  color: #9da0b5;
  cursor: pointer;
  transition: transform 140ms ease-out, box-shadow 140ms ease-out;

  &:hover {
    text-decoration: underline;
    transform: translateY(-1px);
  }
`

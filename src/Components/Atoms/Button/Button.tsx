import styled from "styled-components";

const Button = styled.button`
  background-color: blue;
  padding: 5px 10px;
  color: snow;
  border-radius: 0px;
  border: none;
  outline: none;
  &:hover {
    background-color: blueviolet;
    transition: 300ms;
  }
`;

export default Button;

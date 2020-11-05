import styled from "styled-components";

const InputText = styled.input`
  outline: none;
  border-radius: 0px;
  border: none;
  padding: 5px 0px 5px 5px;
  border-bottom: blue 2px solid;
  &:hover {
    border-bottom: blueviolet 2px solid;
    transition: 300ms;
  }
  &:focus {
    border-bottom: blueviolet 2px solid;
    color: blueviolet;
  }
`;

export default InputText;

import React from "react";
import styled from "styled-components";
import InputText from "Components/Atoms/InputText/InputText";
import Button from "Components/Atoms/Button/Button";
import Modal from "../Modal/Modal";
import { IAddBar } from "Interfaces/Interfaces";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 55px;
`;

const AddBar = ({
  show,
  refInput,
  onClickAddDataFn,
  onEnterAddDataFn
}: IAddBar) => (
  <Wrapper>
    <InputText
      onKeyUp={onEnterAddDataFn}
      ref={refInput}
      type="text"
      placeholder="Add something!"
    />
    <Button onClick={onClickAddDataFn}>add</Button>
    <Modal show={show.show} setShow={show.setShow}>
      You have to type something.
    </Modal>
  </Wrapper>
);

export default AddBar;

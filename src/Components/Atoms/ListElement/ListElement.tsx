import React from "react";
import styled from "styled-components";
import Modal from "Components/Molecules/Modal/Modal";
import Button from "Components/Atoms/Button/Button";
import { IListElement } from "Interfaces/Interfaces";

const Element = styled.li`
  display: grid;
  grid-template-columns: 100px 1fr 50px;
  padding: 5px;
  border-bottom: blue 2px solid;
  align-items: center;
`;

const ElementLeftSide = styled.div`
  padding-left: 5px;
`;

const ElementRightSide = styled.div`
  padding: 0 10px;
`;

const ListElement = ({ id, text, date, data, setData }: IListElement) => {
  const [show, setShow] = React.useState<boolean>(false);
  const handlerModalFn = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    setShow(!show);
  };
  return (
    <Element>
      <ElementLeftSide>{date}</ElementLeftSide>
      <ElementRightSide>{text}</ElementRightSide>
      <Button onClick={handlerModalFn}>x</Button>
      <Modal
        show={show}
        setShow={setShow}
        title="If you confirm, the item will be removed from the list!"
        onClick={() => {
          const sortData = data.filter((value) => {
            if (id !== value.id) {
              return value;
            }
            return false;
          });
          localStorage.setItem("arrData", JSON.stringify(sortData));
          setData(sortData);
        }}
      ></Modal>
    </Element>
  );
};
export default ListElement;

import React from "react";
import List from "Components/Molecules/List/List";
import AddBar from "Components/Molecules/AddBar/AddBar";
import styled from "styled-components";
import { useData } from "Hooks/useData/useData";

const Wrapper = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  border-left: blue 1px solid;
  border-right: blue 1px solid;
`;

const Todolist = () => {
  const {
    data,
    setData,
    onEnterAddDataFn,
    onClickAddDataFn,
    refInput,
    show
  } = useData();
  return (
    <Wrapper>
      <AddBar
        show={show}
        refInput={refInput}
        onClickAddDataFn={onClickAddDataFn}
        onEnterAddDataFn={onEnterAddDataFn}
      />
      {data[0] ? (
        <List data={data} setData={setData} />
      ) : (
        <div>Add something to your list!</div>
      )}
    </Wrapper>
  );
};
export default Todolist;

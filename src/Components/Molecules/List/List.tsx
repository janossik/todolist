import React from "react";
import styled from "styled-components";
import ListElement from "Components/Atoms/ListElement/ListElement";
import { IDataArray } from "Interfaces/Interfaces";

const Wrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const List = ({ data, setData }: IDataArray) => {
  return (
    <>
      <Wrapper>
        {data.map((element) => (
          <ListElement
            key={element.id}
            id={element.id}
            date={element.date}
            text={element.text}
            data={data}
            setData={setData}
          />
        ))}
      </Wrapper>
    </>
  );
};

export default List;

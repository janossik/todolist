import React from "react";
import getID from "helperFunctions/getID";
import getFullDate from "helperFunctions/getFullDate";
import { IData } from "Interfaces/Interfaces";

const arr = [
  {
    id: "xxx",
    date: "04.11.2020",
    text: "You don't need to use the add button, you can use the Enter key!"
  }
];

let arrData = localStorage.getItem("arrData") as string;

if (arrData === null) {
  arrData = "";
}
export const useData = () => {
  const refInput = React.useRef<HTMLInputElement>(null);
  const [show, setShow] = React.useState<boolean>(false);
  const [data, setData] = React.useState<IData[]>(
    arrData?.length > 2 ? JSON.parse(arrData) : arr
  );
  const addDataFn = () => {
    if (data && refInput.current?.value) {
      localStorage.setItem(
        "arrData",
        JSON.stringify([
          ...data,
          { id: getID(), date: getFullDate(), text: refInput.current.value }
        ])
      );
      const arrData = localStorage.getItem("arrData") as string;
      setData(JSON.parse(arrData));
      refInput.current.value = "";
    } else {
      setShow(true);
    }
  };

  const onEnterAddDataFn = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.key === "Enter") addDataFn();
  };
  const onClickAddDataFn = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    addDataFn();
  };
  return {
    data,
    setData,
    onEnterAddDataFn,
    onClickAddDataFn,
    refInput,
    show: { show, setShow }
  };
};

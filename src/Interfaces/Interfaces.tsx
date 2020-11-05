import React from "react";

export interface IData {
  id: string;
  date: string;
  text: string;
}
export interface IDataArray {
  data: IData[];
  setData: React.Dispatch<React.SetStateAction<IData[]>>;
}

export interface IListElement {
  id: IData["id"];
  text: IData["text"];
  date: IData["date"];
  data: IDataArray["data"];
  setData: IDataArray["setData"];
}
export interface IModal {
  children?: string;
  onClick?: Function;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
}
export interface IAddBar {
  onClickAddDataFn: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onEnterAddDataFn: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  refInput: React.RefObject<HTMLInputElement>;
  show: {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

import React from "react";
import styled from "styled-components";
import Button from "Components/Atoms/Button/Button";
import { IModal } from "Interfaces/Interfaces";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Wrapper = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  max-height: 500px;
  max-width: 500px;
  margin: 0 10px;
  padding: 10px;
  background-color: snow;
  transform: translateY(-60%) translateX(-50%);
  header {
    display: flex;
    align-items: center;
    h3 {
      margin: 0;
      color: blue;
    }
    button {
      height: 30px;
      width: 30px;
      margin-left: auto;
      margin-bottom: auto;
      background-size: cover;
      background-color: yellow;
      background-image: url("https://material.io/resources/icons/static/ic_close_black_24px.svg");
      background-position: center;
      background-repeat: no-repeat;
      border: none;
      border-radius: 50%;
      outline: none;
      filter: invert(100%);
      &:hover {
        background-color: greenyellow;
        transform: rotate(90deg) scale(1.2);
        transition: 500ms;
      }
    }
  }
  article {
    section {
      margin: 10px 0 30px 20px;
      color: rgba(130, 130, 130, 1);
    }
    div {
      button {
        margin: 10px;
        margin-top: 0;
      }
    }
  }
`;

const Modal = ({ children, onClick, title, show, setShow }: IModal) => {
  return (
    <>
      {show && (
        <Background>
          <Wrapper>
            <header>
              <h3>{title}</h3>
              <button
                onClick={() => {
                  setShow(false);
                }}
              />
            </header>
            <article>
              <section>{children}</section>
              {onClick && (
                <div>
                  <Button
                    onClick={(e) => {
                      onClick(e);
                    }}
                  >
                    confirm
                  </Button>
                  <Button
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    discard
                  </Button>
                </div>
              )}
            </article>
          </Wrapper>
        </Background>
      )}
    </>
  );
};

export default Modal;

"use client";
import { ReactNode, useState } from "react";
import { ModalContext } from "../modal-context";

export function ModalContextProvider({ children }: { children: ReactNode }) {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [modalWidth, setModalWidth] = useState<string>("0px");
  function handleModalToggle() {
    setModalActive(!modalActive);
  }
  // console.log(modalActive);

  return (
    <ModalContext.Provider
      value={{
        modalActive,
        handleModalToggle,
        setModalActive,
        modalWidth,
        setModalWidth,
      }}>
      {children}
    </ModalContext.Provider>
  );
}

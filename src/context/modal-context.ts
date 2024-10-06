import { Dispatch, SetStateAction, createContext } from "react";

export interface ModalContextInterface {
  modalActive: boolean;
  handleModalToggle: () => void;
  setModalActive : Dispatch<SetStateAction<boolean>>;
  modalWidth : string,
  setModalWidth : Dispatch<SetStateAction<string>>
}
export const ModalContext = createContext<ModalContextInterface>({
  modalActive: false,
  handleModalToggle: () => {},
  setModalActive: () => {},
  modalWidth:'',
  setModalWidth:()=>{}
});
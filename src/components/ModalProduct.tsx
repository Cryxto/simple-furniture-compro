"use client";

import { ModalContext } from "@/context/modal-context";
import Image from "next/image";
import { ReactNode, useCallback, useContext, useEffect, useRef } from "react";
import { RxCross2 } from "react-icons/rx";

export interface ModalProductInterface {
  title?:string,
  description?:string,
  content?:ReactNode,
}

function ModalProduct({ props, children }: { props:ModalProductInterface, children: ReactNode }) {
  const { modalActive, setModalActive, modalWidth, setModalWidth } = useContext(ModalContext);

  function getFullWidthRespectingScrollbarInVw() {
    const themodalWidth = window?.innerWidth - document.documentElement.clientWidth;
    return "calc(100% - " + (themodalWidth <= 1 ? 0 : themodalWidth) + "px)";
  }

  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    setModalWidth(getFullWidthRespectingScrollbarInVw());
  }, [setModalWidth]);

  const handleShow = useCallback(() => {
    if (ref.current) {
      ref.current.showModal();
      ref.current.scrollTo(0, 0); // Scroll to the top when the modal is shown
    }
    setModalActive(true);
  }, [ref, setModalActive]);

  const handleClose = useCallback(() => {
    if (ref.current) {
      ref.current.close();
    }
    setModalActive(false);
  }, [ref, setModalActive]);

  const handleClickOutside = useCallback(
    (event: Event) => {
      if (ref.current && event.target === ref.current) {
        handleClose();
      }
    },
    [handleClose]
  );

  const handleDialogOnClose = useCallback(() => {
    if (ref.current) {
      ref.current.scrollTo(0, 0);
    }
  }, [ref]);

  useEffect(() => {
    if (modalActive) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalActive, handleClickOutside]);

  return (
    <div className="w-full flex justify-center">
      <button className="hover:text-gray-900 text-slate-100" onClick={handleShow}>
        {children}
      </button>
      <dialog
        id="my_modal_1"
        ref={ref}
        style={{ maxWidth: modalActive ? modalWidth : "100%" }}
        className="modal w-full overflow-y-auto"
        onClose={handleDialogOnClose}>
        <div className="modal-box bg-[#f8f8f8] text-gray-900 max-h-[90%] m-auto relative max-w-full ">

          {/* Button */}
          <button
            className="absolute right-4 top-4 text-2xl hover:text-gray-300 focus:outline-none"
            onClick={handleClose}>
            <RxCross2 />
          </button>
          {/* End Button */}

          {/* Content */}

          <h2 className="font-bold text-2xl px-4 text-center">{props.title}</h2>
          <p className="py-4 px-4 mx-12 text-center leading-loose ">
            {props.description}
          </p>

          {/* Product Details */}
          {props.content}
          {/* End Product Details */}

          {/* End Content */}

          <div className="modal-action">
            <button onClick={handleClose} className="btn">
              Close
            </button>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export { ModalProduct };

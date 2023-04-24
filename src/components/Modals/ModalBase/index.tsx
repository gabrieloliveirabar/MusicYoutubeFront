import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useContext } from "react";
import { BackDrop } from "../../BackDrop";
import { StyledModal } from "./styles";

import { api } from "../../../services/api";
import { SongContext } from "../../../context/songContext";

export interface IModalBase {
  titleHeader: string;
}

export interface IModalBasePrimary extends IModalBase {
  setState: Dispatch<SetStateAction<boolean>>;
  children?: any;
}

export const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

export const ModalBase = ({
  titleHeader,
  setState,
  children,
}: IModalBasePrimary) => {
  return (
    <BackDrop setState={setState}>
      <StyledModal
        as={motion.div}
        key="modalBase"
        variants={dropIn}
        onClick={(e) => e.stopPropagation()}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="headerModal">
          <p>{titleHeader}</p>
          <button
            onClick={() => {
              setState(false);
            }}
          >
            X
          </button>
        </div>

        {children}
      </StyledModal>
    </BackDrop>
  );
};

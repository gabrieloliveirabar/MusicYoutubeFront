import { useContext } from "react";
import { ModalBase } from "../ModalBase";
import { SongContext } from "../../../context/songContext";
import { StyledErrorModal } from "./styles";

export const ModalError = () => {
  const { setOpenModalErrorMsg, errorMsg } = useContext(SongContext);

  return (
    <ModalBase titleHeader="Error Messsage" setState={setOpenModalErrorMsg}>
      <StyledErrorModal>
        <h2>Error</h2>
        <p>Tente novamente mais tarde...</p>
      </StyledErrorModal>
    </ModalBase>
  );
};

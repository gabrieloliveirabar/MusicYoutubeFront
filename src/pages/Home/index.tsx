import { Header } from "../../components/Header";
import {
  ButtonStyled,
  HomeStyled,
  MainStyled,
  SerchMusic,
  StyledDescription,
} from "./styles";
import { useState } from "react";

import { linkSchema } from "../../validators/linkValidations";
import { useContext } from "react";
import { ModalBase } from "../../components/Modals/ModalBase";
import { SongContext } from "../../context/songContext";
import { ModalSong } from "../../components/Modals/ModalSong";
import { ModalError } from "../../components/Modals/ModalError";

export const Home = () => {
  const [link, setLink] = useState<string>("");
  const { modalSongOpen, openModalErrorMsg, statusCode_Post, SongPost } =
    useContext(SongContext);

  const validateLink = async (link: string): Promise<boolean> => {
    try {
      await linkSchema.validate({ url: link });
      return true;
    } catch (error) {
      return false;
    }
  };
  const handAddLink = async (link: string) => {
    const isValid = await validateLink(link);
    if (isValid) {
      SongPost(link);
    }
  };

  return (
    <HomeStyled>
      <Header />
      <MainStyled>
        <StyledDescription>
          <h2>Gostou de uma música no youtube e quer o mp3 dela?</h2>
          <p>
            este site disponibiliza para você, a sua música do youtube tão
            desejada em mp3!
          </p>
        </StyledDescription>
        <SerchMusic>
          <input
            type="text"
            placeholder="https://www.youtube.com/"
            onChange={(e) => setLink(e.target.value)}
          />
          <ButtonStyled
            onClick={() => {
              handAddLink(link);
            }}
          >
            mp3
          </ButtonStyled>
        </SerchMusic>
        {modalSongOpen && <ModalSong />}
        {openModalErrorMsg && <ModalError />}
      </MainStyled>
    </HomeStyled>
  );
};

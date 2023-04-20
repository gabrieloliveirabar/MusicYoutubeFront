import { useContext, useState } from "react";
import { ModalBase } from "../ModalBase"
import { SongContext } from "../../../context/songContext";
import { StyledModalSong, StyledSong } from "./styles";
import { Loading } from "../../framerMotions/Loading/indext";


export const ModalSong = () => {
   
    const {mp3_Song, setModalSongOpen} = useContext(SongContext)
    return (
        <ModalBase titleHeader="mp3" setState={setModalSongOpen}>
            <StyledModalSong>
                <div className="ContainerAudio">
                    {mp3_Song && (
                        <StyledSong>
                        <audio controls>
                        <source src={URL.createObjectURL(new Blob([mp3_Song], { type: 'audio/mpeg' }))} />
                        </audio>
                        <a href={URL.createObjectURL(new Blob([mp3_Song], { type: 'audio/mpeg' }))} className="buttonDowload" download="song.mp3">
                        Download
                        </a></StyledSong>
                    ) || <Loading />}
                    
                </div>
                
               

            </StyledModalSong>
         
        </ModalBase>
    )
       
}
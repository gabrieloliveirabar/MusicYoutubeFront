import {
    createContext,
    Dispatch,
    MouseEventHandler,
    ReactNode,
    SetStateAction,
    useEffect,
    useState,
  } from "react";
import { api } from "../services/api";

interface ISongProvider {
    children: ReactNode;
}
export interface ISongContext {
    SongPost: (e: string) => void,
    mp3_Song: any
    modalSongOpen:boolean,
    setModalSongOpen: Dispatch<SetStateAction<boolean>>,
    errorMsg: string,
    openModalErrorMsg:boolean,
    setOpenModalErrorMsg: Dispatch<SetStateAction<boolean>>,
    
    
  }

export const SongContext = createContext<ISongContext>({} as ISongContext)

export const SongProvider = ({ children }: ISongProvider) => {
    const [errorMsg, setErrorMsg] = useState("")
    const [mp3_file_url, setMp3_file_url] = useState("")
    const [mp3_Song, setMp3_Song] = useState()
    const [modalSongOpen, setModalSongOpen] = useState<boolean>(false)
    const [openModalErrorMsg, setOpenModalErrorMsg] = useState(false)
    const [statusCode_Post, setStatusCode_Post ] = useState(0)
    
    
    const SongPost = async (link: string) => {
        setModalSongOpen(true)
        await api.post(`api/songs/`, { link }).then((res) => {

            if (res.status === 201) {
                setMp3_file_url(res.data["mp3_file_url"])               
            }
            
            return res.status
        })
        
       
    }

    useEffect(() => {
        api.get(`http://localhost:8000/api${mp3_file_url}`, {
        responseType: 'arraybuffer',
        headers: {
          'Content-Type': 'audio/mpeg'
        }}).then((res)=>setMp3_Song(res.data))
    }, [mp3_file_url])
   


    return (
        <SongContext.Provider value={{SongPost, mp3_Song, modalSongOpen, setModalSongOpen, errorMsg, openModalErrorMsg, setOpenModalErrorMsg }}>
            {children}
        </SongContext.Provider>
    )
}
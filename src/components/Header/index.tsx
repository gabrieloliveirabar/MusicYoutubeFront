import { TfiMenu } from 'react-icons/tfi';
import { LogoStyled, NavStyled, UlStyled, WrapperStyled } from './styles';
import { useNavigate } from 'react-router-dom';
import yotube from "../../assets/logo.png"

export const Header = () => {
    const navigate = useNavigate()
    return (
        
                            
            <WrapperStyled>

                <NavStyled>
                <LogoStyled href="/"><img src={yotube} alt="" /></LogoStyled>
                    
                    <input type="checkbox"  id="toggle" />
                    <label htmlFor="toggle"><TfiMenu/></label>
                                           
                    <div className='menu'>
                        <UlStyled>
                            <li>register</li>
                            <li>login</li>
                        </UlStyled>
                    </div>
                </NavStyled>

            </WrapperStyled>
            
    )
}
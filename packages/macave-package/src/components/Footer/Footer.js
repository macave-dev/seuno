import React,{useState,useEffect} from 'react';
import { connect, styled } from 'frontity';
import Link from '@frontity/components/link'
import SubMenuFooter from './SubMenu';
import Logo from '../Header/Logo'
import FooterFirstPart from './FooterFirstPart';
import FooterLastPart from './FooterLastPart';

const Footer = ({state}) => {

    const url = 'https://eventosyfestivales.com/wp-json/wp-macave/v1/schema';
    const [information,setInformation] = useState()
    const fetchApi = async() => {
        const response = await fetch(url);
        const responseJSON = await response.json();
        setInformation(responseJSON);
    }

    useEffect(() => {
        fetchApi();
    },[])

    useEffect(() => {
        fetchApi();
    },[])
    
    return (
        <FooterContainer>
            <FooterFirstPart></FooterFirstPart>
            <FooterContent>
                <SubMenuFooter></SubMenuFooter>
                {!information ? '': 
                    <>
                        <DIRECCION className='direction-column'>
                            <h4>DIRECCIÓN</h4>
                            <p>{information.Direccion}</p>
                            <Link link={`mailto:${information.Contacto}`} target="_blank">{information.Contacto}</Link>
                        </DIRECCION>
                        <CONTACTO className='contact-column'>
                            <h4>CONTACTO</h4>
                            <Link link={"mailto:contacto@tolucaellacd.com"} target="_blank">contacto@tolucalabellacd.com</Link>
                        </CONTACTO>
                    </>
                }
                
            </FooterContent>
            <FooterLastPart></FooterLastPart>
        </FooterContainer>
        
    )
}

export default connect(Footer)

const FooterContainer = styled.div`
    background: #EBEBEB;
    padding: 0 20px;
    @media (max-width: 769px) {
        padding: 10px 20px;
        box-sizing: border-box;
    }
`

const FooterContent = styled.div`
    display: grid;
    max-width: 870px;
    margin: 0 auto 20px;
    grid-template-columns: repeat(8, calc( calc(100% - 140px) / 8));
    grid-gap: 20px;
    width: 100%;
    ul{
        padding:0;
        margin: 0;
    }
    h4{
        color:#4C4A58;
        font-size: 18px;
        font-weight: 600;
        margin: 0 0 20px;
    }
    @media (max-width: 769px) {
        display: block;
        & > div{
            margin-bottom: 20px;
        }
    }
`
const DIRECCION = styled.div`
    p, a{
        color: #4C4A58;
        font-size: 14px;
        text-decoration: none;
    }
`
const CONTACTO = styled.div`
    a{
        color: #4C4A58;
        font-size: 14px;
        text-decoration: none;
    }
    @media (max-width: 769px) {
        padding-left: 0;
    }
`
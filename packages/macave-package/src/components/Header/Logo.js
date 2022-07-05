import React, {useState,useEffect} from 'react';
import {connect, styled,css}  from 'frontity';
import Link from '@frontity/components/link';
import Logo_file from '../../assets/logo.png'
import Switch from "@frontity/components/switch"

const Logo = ({state}) => { 

    const data = state.source.get(state.router.link)
    
    const url = 'https://seunonoticias.net/wp-json/wp-macave/v1/schema';
    const [information,setInformation] = useState()
    const fetchApi = async() => {
        const response = await fetch(url);
        const responseJSON = await response.json();
        setInformation(responseJSON);
        
    }

    useEffect(() => {
        fetchApi();
    },[])



    return (
        <LogoContent>
            {!information ? '':
                <Link link='/'>
                    <Switch>
                        <h1 className='hide-title' when = {data.isHome}>Eventos y festivales</h1>    
                    </Switch>
                    
                    <img src = {information.Logo} />
                </Link>
            }
           
        </LogoContent>
    )
}

export default connect(Logo);


const LogoContent = styled.div`
    .hide-title{
        display: none;
    }
    justify-self: center;
    a{
        display: block;
        margin: 10px auto;
        img{
            width: auto;
            height: 50px;
        }
    }
`
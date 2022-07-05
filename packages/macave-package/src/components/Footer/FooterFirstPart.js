import React, {useState,useEffect} from 'react';
import { connect, styled } from 'frontity';
import Link from '@frontity/components/link';
import Logo from '../Header/Logo';
import FbIcon from '../svgIcons/fbIcon';
import InstagramIcon from '../svgIcons/instagramIcon';
import YtIcon from '../svgIcons/ytIcon';
import TwitterIcon from '../svgIcons/twitterIcon';

const FooterFirstPart = ({state}) => {

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
    
    return(
        <FooterFirst>

            <div>
                <Logo></Logo>
            </div>

            {!information ? '':
                <ul>
                    <li>
                        <Link target="_blank" link={information.Facebook}>
                            <FbIcon></FbIcon>
                        </Link>
                    </li>
                    <li>
                        <Link target="_blank" link={information.Instagram}>
                            <InstagramIcon></InstagramIcon>
                        </Link>
                    </li>
                    <li>
                        <Link target="_blank" link={information.Twitter}>
                            <TwitterIcon></TwitterIcon>
                        </Link>
                    </li>
                    <li>
                        <Link target="_blank" link={information.YouTube}>
                            <YtIcon></YtIcon>
                        </Link>
                    </li>
                </ul>
            }
            
        </FooterFirst>
    )
}

export default connect(FooterFirstPart)

const FooterFirst = styled.div`
    display: grid;
    max-width: 870px;
    margin: 0 auto 20px;
    grid-template-columns: 50% 50%;
    ul{
        list-style: none;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(4, 45px);
        align-items: center;
        justify-content: end;
        li{
            text-align: center;
            a{
                display: inline-block;
                height: fit-content;
                line-height: 1;
                svg{
                    display: block
                }
            }
        }
    }
`
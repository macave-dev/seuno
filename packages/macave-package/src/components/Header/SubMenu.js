import React,{useState,useEffect} from 'react';
import { connect,styled } from 'frontity';
import Link from '@frontity/components/link'

const SubMenu = ({state}) => {
    // This component is use to create and display the SubMenu, wich is set on the top of the page

    const data = state.source.get(state.router.link)

    const url = 'https://eventosyfestivales.com/wp-json/wp-macave/v1/primary';
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
        <Sub>
            <div>
                <ul>
                    {!information ? '':
                      information.map((item,id) => {
                        return(
                            <li className='' key = {id}>
                                <Link target = 'blank' link = {item.url}>{item.title}</Link>
                            </li>
                        )
                      })
                } 
                </ul>
            </div>
        </Sub>
    )
}


export default connect(SubMenu)

const Sub = styled.div`
    max-width: 870px;
    margin: 0 auto;
    position: relative;
    z-index: 6;
    & > div{
        overflow: hidden;
        overflow-x: scroll;
        height: 40px;
    }
    @media (max-width: 900px) {
        width: 95%;
    }
    ul{
        height: 32px;
        display: flex;
        flex-direction: row;
        gap: 22px;
        list-style: none;
        padding: 9px 0 0;
        box-sizing: border-box;
        margin: 0;
        a {
            color: #e0e0e;
            text-decoration: none;
            color: #ADADAD;
        }
        li{
            white-space: nowrap;
            &.active{
                a{
                    color:#000000;
                }
                border-bottom: 1px solid #000000;
            }
        }
    }
    &::after{
        content: ' ';
        display: block;
        height: 1px;
        width: 100%;
        position: absolute;
        left: 0;
        background: #EDEDED;
    }
`
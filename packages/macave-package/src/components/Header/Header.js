import React, { useState, useRef, useEffect} from 'react';
import { connect, styled,css } from 'frontity';
import SubMenu from './SubMenu';
import HeaderWrapper from './HeaderWrapper';

const Header = ({state}) => {

    /* This header is use to contain all the elements on the header of the main page*/
    const data = state.source.get(state.router.link)
    const [isSticky, setSticky] = useState(false);
    const ref = useRef(null);

    const setStickyHeader = () => {
        if ( ref.current ) {
            setSticky(ref.current.getBoundingClientRect().top <= -32);
        }
    }

    useEffect(() => {
        
        window.addEventListener('scroll', setStickyHeader);
        return () => {
          window.removeEventListener('scroll', () => setStickyHeader);
        };
    },[])

    return (
        <HeaderContent ref={ref} className={ isSticky ? 'stick-header' : ''}>
            <SubMenu></SubMenu>
            <HeaderWrapper props="header-menu"></HeaderWrapper>
        </HeaderContent>
    )
}

export default connect(Header)

const HeaderContent = styled.header`
    display: block;
    margin: 0 auto 20px;
    position: relative;
    z-index: 8;
    @media (max-width: 900px){
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    }
    &.stick-header{
        z-index: 999;
        position: relative;
        .header-menu{
            position: fixed;
            top: 0;
            width: 95%;
            left: 50%;
            transform: translateX(-50%);
            &::before{
                position:fixed;
                width: 400%;
                left: 50%;
                transform: translateX(-50%);
                height: 74px;
                background: white;
                content: ' ';
                display: block;
                z-index: 5;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
            }
            & > div{
                position: relative;
                z-index: 8;
                &:last-of-type{
                    position: initial;
                    z-index: 7;
                }
            }
        }
        & + .shareBarElement{
            & + main{
                margin-top: 140px;
            } 
            @media (max-width: 900px){
                position: fixed;
                margin-top: 13px;
                padding: 20px 0 0;
                & + main{
                    margin-top: 170px;
                }
            }
        }
        & + main{
            margin-top: 90px;
        }
    }
`
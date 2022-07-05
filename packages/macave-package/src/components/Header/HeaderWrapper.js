import React from 'react';
import { connect, styled,css } from 'frontity';
import Link from '@frontity/components/link'
import Logo from './Logo'
import Menu from './Menu';
import Search from './Search';

const HeaderWrapper = ({state,props}) => {
    const data = state.source.get(state.router.link)

    return (
        <HeaderWrapperElement className={props}>
            <Menu></Menu>
            <Logo></Logo>
            <Search></Search>
        </HeaderWrapperElement>
    )
}

export default connect(HeaderWrapper)

const HeaderWrapperElement = styled.div`
    max-width: 870px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, calc(100%/3));
    align-items: center;
    min-height: 70px;
    & > div{
        position: relative;
        z-index: 5;
        &:last-of-type{
            position: initial;
            z-index: 3;
        }
    }
    @media (max-width: 768px){
        width: 95%;
    }
`
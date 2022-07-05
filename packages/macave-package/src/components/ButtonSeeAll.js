import React from 'react';
import {connect,styled} from 'frontity';
import Link from '@frontity/components/link';
import GoToIcon from '../components/svgIcons/goToIcon';

const SeeAll = ({state, props}) => {
    const data = state.source.get(state.router.link);
    return(
        <>
            <Link link ={props}> 
                <GoToIcon></GoToIcon>
                <span>Ver todas</span>
            </Link>
        </>
    )
}


export default connect(SeeAll)
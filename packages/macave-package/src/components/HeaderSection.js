import React from 'react';
import {connect,styled} from 'frontity';
import SeeAll from './ButtonSeeAll';

const HeaderSection = ({props,styled}) => {
    return(
        <div className='section__header'>
            <div>
                <h3>{props.text}</h3>
            </div>
            <div>
                {(() => {
                    if ( props.link ) {
                        return(
                            
                                <SeeAll props={props.link}></SeeAll>
                        )
                    }
                })()}
            </div>
        </div>
    )
}

export default connect(HeaderSection)
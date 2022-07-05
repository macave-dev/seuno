import React from 'react';
import { connect, styled,css } from 'frontity';
import dayjs from 'dayjs';
import Link from '@frontity/components/link';

const RelatedTopics = ({state, actions, tags}) => {
    const data = state.source.get(state.router.link)
    
    
    return (
        <RelatedTopicContainer>
            <h3>TEMAS RELACIONADOS</h3>
            <RelatedTopicsContent>
            {tags.length > 0 ? (
        <>
            {tags.map((tagId, index) => {
                const tag = state.source.tag[tagId];
                    return (
                        <div key={tagId}>
                        <Link link={tag?.link}>{tag?.name}</Link>
                        </div>
                    );
                })}
        </>
            ) : null}
            </RelatedTopicsContent>
        </RelatedTopicContainer>
    )
}

export default connect(RelatedTopics)

const RelatedTopicContainer = styled.div`
    h3{
        margin-top: 0;
        font-size: 17px;
        color: #000000;
        font-weight: 500;
        text-transform: uppercase;
    }
`
const RelatedTopicsContent = styled.div`
    margin-top: 44px;
    & > div{
        display: inline-block;
        margin: 0 16px 16px 0;
        text-decoration: none;
        border-radius: 10px;
        color: #000000;
        height: 34px;
        box-sizing: border-box;
        border: 1px solid #000000;
        line-height: 2;
        position: relative;
    }
    a{
        text-decoration: none;
        color: #000000;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        padding: 0 16px;
        height: 34px;
        line-height: 2;
        display: block;
        box-sizing: border-box;
        border-radius: 10px;
    }
`
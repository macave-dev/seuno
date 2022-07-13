import React from 'react';
import { connect, styled, css } from 'frontity';
import Link from '@frontity/components/link'

const Author = ({state, props}) => {
    const data = state.source.get(state.router.link)
    const author = props
    const author_image = Object.values(author.avatar_urls)

    return (
        <AuthorContainer>
            <h2>SOBRE EL AUTOR</h2>
            <AuthorImage>
                <Link link = {author.link}>
                    <img src = {author_image[2]} alt = {author.name}></img>
                </Link>
                
            </AuthorImage>
            <h3>{author.name}</h3>
            <p>{author.yoast_head_json.og_title}</p>
        </AuthorContainer>
    )
}

export default connect(Author)

const AuthorContainer = styled.div`
    margin: 64px 0 28px;
    h2{
        margin: 0 0 12px;
        font-size: 17px;
        color: #000000;
        font-weight: 500;
        text-transform: uppercase;
    }
    h3{
        color: #4C4A58;
        font-size: 15px;
        font-weight: 600;
        text-align: center;
        margin-bottom: 12px;
    }
    p{
        color: #868495;
        font-size: 13px;
        font-weight: 400;
        text-align: center;
    }
`
const AuthorImage = styled.div`
  border-radius: 50%;
  overflow: hidden;
  height: 70px;
  width: 70px;
  margin: 0 auto 4px;
`
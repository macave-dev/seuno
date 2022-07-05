import React from 'react';
import { connect, styled,css } from 'frontity';
import ListPage from './list/ListPage';
import dayjs from 'dayjs';
import Link from '@frontity/components/link'

const AuthorPage =  ({state}) => {

    const data = state.source.get(state.router.link)
    const informationToUse = data.items.map(element => 
        state.source.post[element.id]
    )

    {data.isFetching && <Loading/>}
        
    return(
        <Items>
            
            <img src={Object.values(state.source.author[data.id].avatar_urls)[1]}/>
            <h1>{state.source.author[data.id].name}</h1>
            <h3>{state.source.author[data.id].yoast_head_json.og_title}</h3>
        
            {informationToUse.map((item,key) => {
            const formattedDate = dayjs(item.date).format("DD MMMM YYYY")
            return (
                <Container key={key}>
                    <Link link = {item.link}>
                        <img src={item.jetpack_featured_media_url}/>
                        <h3>{item.title.rendered}</h3>
                        <h4>{formattedDate}</h4>
                    </Link>
                    <h4>{state.source.author[item.author].name}</h4>
                </Container>
            )
            })}
        </Items>
    )

}

export default connect(AuthorPage)

const Items = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const Container = styled.div`
border-bottom: 1px solid #D3D3D3;
margin-bottom: 15px;

& > a {
  line-height: 0px;
  color: black;
  text-decoration: none;
}
`;     

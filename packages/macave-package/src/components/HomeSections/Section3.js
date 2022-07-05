import React from 'react';
import {connect,styled} from 'frontity';
import Link from '@frontity/components/link'
import dayjs from 'dayjs'
import SeeAll from '../ButtonSeeAll';

const Section3 = ({state,id_category}) => {
    const data = state.source.get(state.router.link)
    const category = state.source.category[id_category]
    

    const getPostsToUseInEachContainer = (id_category) => {
        const allPosts = Object.values(state.source.post)
        const filteredPosts = allPosts.filter( (post) => 
            post.categories[0] == id_category || post.categories[1] == id_category
        )

        return filteredPosts.slice(-10)
    }
    const posts_to_use  = getPostsToUseInEachContainer(id_category);


    return (
        <>
            <Link link = {category.link}>{category.name}</Link>
            ////
            <SeeAll props = {category.link}></SeeAll>
            
            <Items>
            {posts_to_use.map( (post) => {
                const formattedDate = dayjs(post.date).format("DD MMMM YYYY")
                const info = {
                    title: post.yoast_head_json.title,
                    image: post.yoast_head_json.og_image[0].url,
                    description: post.yoast_head_json.description,
                    date:formattedDate,
                    author: post.author,
                    category: category.name
                }
                
                
                return (
                    <Article key = {post.id}>
                        <Link  link = {post.link}>
                            <img src = {info.image}></img>
                            <Card2 props = {info}></Card2>
                        </Link>
                        <SeeAll props = {category.link} ></SeeAll>
                    </Article>
                    
                )


            })}
            </Items>
        </>
    )

}
export default connect(Section3)


const Article = styled.article`
    
    padding: 10px;

    & > a {
        display: block;
        margin: 6px 0
        font-size: 1.2em;
        color: black;
        text-decoration: none;
        
    }
`

const Items = styled.div`
    border: 3px solid #0032FF;
    padding: 10px;
    margin: 10px;
    
    & > a {
        display: block;
        margin: 6px 0
        font-size: 1.2em;
        color: black;
        text-decoration: none;
        
    }
`
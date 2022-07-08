import {usePostTypeInfiniteScroll} from '@frontity/hooks'
import { connect, styled, css } from 'frontity';
import Post from './Post'


const PostList = ({propsApi_Schema}) => {
    const {posts,fetchNext,isLimit} = usePostTypeInfiniteScroll({limit: 5});


    return (
        <div>
            
            {posts.map( ({key, link, isLast, Wrapper}) => {
                return (
                    <Wrapper key = {key}>
                        <Post link = {link} />
                        {isLast && <hr/>}
                    </Wrapper>
                )
                
            })}
            <Container>
                {(isLimit) && <Button onClick={fetchNext}>Cargar siguientes</Button>}
            </Container>
        </div>
    )

}

export default connect(PostList)

const Container = styled.div`
    width: 100%;
    text-align: center;
    margin: 40px;
`

const Button = styled.button`
    background: #39448D;
    color: white;
    position: relative;
    border: none;
    padding: 10px;
`
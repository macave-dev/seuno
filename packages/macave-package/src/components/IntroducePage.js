import React, {useState,useEffect} from 'react'
import { connect, styled } from 'frontity';


const IntroducePage = ({ state,libraries }) => {

  const data = state.source.get(state.router.link)


    const url = 'https://seunonoticias.net/wp-json/wp/v2/pages'
    const [information,setInformation] = useState()
    const fetchApi = async() => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setInformation(responseJSON)
    }

    useEffect(() => {
        fetchApi()
    },[])

  const Html2React = libraries.html2react.Component


  return (
    <Container>
        {!information ? '':
        <>
            {information.map(item => {
              if(item.slug === 'quienes-somos'){
                return(
                  <div>
                    <h1>{item.title.rendered}</h1>
                    <Html2React html={item.content.rendered} />
                  </div>   
                )
              }
            })}
        </>
        }
    </Container>
  )
}

export default connect(IntroducePage)

const Container = styled.div`
  max-width: 870px;
  margin: 0 auto;
  width: 95%;

  a{
    text-decoration: none;
    color: steelblue;
  }
`;     
import React, {useState,useEffect} from 'react'
import { connect, styled } from 'frontity';


const ContactPage = ({ state,libraries }) => {

  const data = state.source.get(state.router.link)
  console.log(data)

    const url = 'https://eventosyfestivales.com/wp-json/wp/v2/pages'
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
            <h1>{information[1].title.rendered}</h1>
            <Html2React html={information[1].content.rendered} />
        </>
        }
    </Container>
  )
}

export default connect(ContactPage)

const Container = styled.div`
  max-width: 870px;
  margin: 0 auto;
  width: 95%;

  a{
    text-decoration: none;
    color: steelblue;
  }
`;     
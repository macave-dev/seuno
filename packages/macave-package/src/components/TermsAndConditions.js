import React, {useState,useEffect} from 'react'
import { connect, styled } from 'frontity';

const TermsAndCondtions = ({state,libraries}) => {


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
            <h1>{information[2].title.rendered}</h1>
            <Html2React html={information[2].content.rendered} />
        </>
        }
    </Container>
  )
}

export default connect(TermsAndCondtions)




const Container = styled.div`
  max-width: 870px;
  margin: 0 auto;
  width: 95%;
  a{
    text-decoration: none;
    color: steelblue;
    cursor:pointer;
  }
  h1{
    font-size: 17px;
    font-weight: 500;
  }
  h2{
    font-size: 15px;
    font-weight: 500;
  }
  h3, h4, h5, h6, h7{
    font-size: 15px;
    color: #4C4A58;
  }
  p,ul li, ul li *, ol li, ol li *, span, strong{
    font-size: 15px;
    color: #4C4A58;
    font-weight: 400;
  }
  ul li, ol li{
    margin-bottom: 10px;
  }
  ul{
    list-style:none;
    padding-left: 5px;
  }
  ul li{
    display: grid;
    grid-template-columns: 20px auto;
    grid-gap:4px;
    :before {
      content:"·";
      font-size:35px;
      vertical-align:middle;
      line-height:20px;
      color: #4C4A58;
    }
  }
  strong{
    font-weight: 500;
  }
`;   
import React,{useEffect,useState} from 'react';
import { connect, Global, css, styled} from "frontity"

import Header from './Header/Header'
import Home from './Home'
import Footer from './Footer/Footer';

import Post from './Pages/Post';
import PostList from './Pages/Post-list'
import ListPage from './list/ListPage';
import Loading from './Loading';
import Error from './Error';
import AuthorPage from './AuthorPage';
import { Head } from "frontity";
import { list } from '@frontity/wp-source/src/libraries/schemas';
import PrivacyPage from './PrivacyPage';
import ContactPage from './ContactPage'
import TermsAndConditions from './TermsAndConditions'
import IntroducePage from './IntroducePage'
import SharePostBar from './SharePostBar';

import Switch from "@frontity/components/switch"


const Root = ({state,actions}) => {

    const data = state.source.get(state.router.link);
 
    const url = 'https://seunonoticias.net/wp-json/wp-macave/v1/schema';
    const [information,setInformation] = useState()
    const fetchApi = async() => {
        const response = await fetch(url);
        const responseJSON = await response.json();
        setInformation(responseJSON);
        
    }

    useEffect(() => {
      fetchApi();
    },[])

    return (
      <>
        <Global
          styles={css`
            body{
              margin:0;
              padding:0;
              font-family: 'Rubik', sans-serif;
              #root{
                overflow-x: hidden;
              }
            }
          `}
        />

        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
            <link data-rh="true" rel="preload" href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap" as="font" type="font/woff2" crossorigin="true"/>
            <link data-rh="true" rel="dns-prefetch" href="https://www.google-analytics.com"/>
            <link data-rh="true" href="https://www.google-analytics.com" rel="preconnect" crossorigin="true"/>
            <link data-rh="true" rel="canonical" href={data.link}/> 
            <meta data-rh="true" name="viewport" content="initial-scale=1.0, maximum-scale=1.0, width=device-width, user-scalable=no"/>


            {!information ? '': 
              <script type="application/ld+json">{
                `{
                  "@context": "http://schema.org/",
                  "@type": "NewsMediaOrganization",
                  "name" : "${information.Name}",
                  'url" : "${information.URL}",
                  "logo": "${information.Logo}",
                  "description" : "${information.Description}",
                  "actionableFeedbackPolicy": "${information.Policy}",
                  "foundingDate": "",
                  "sameAs": ""
                }`
             }</script>
            }
            {!information ? '': <link data-rh="true" rel="shortcut icon" href={information.SiteIcon}/>}
            {!information ? '': <link data-rh="true" rel="icon" href={information.SiteIcon} type="image/x-icon"/>}
            

      {/* ADSENSE */}
      <script async src="https:/ pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1507048971343506" crossorigin="anonymous"></script>

        {/* OPTAD */}
        <script async src="/ cmp.optad360.io/items/efcbca1a-ff07-4c07-8ab7-4b8f22babc58.min.js"></script>
        <script async src="/ get.optad360.io/sf/2a85e80b-6283-412a-9072-fb28e85f51ee/plugin.min.js"></script>

        

        </Head>

        
        <Header></Header>

        <Main>
          
          <Switch>
            <SharePostBar when = {data.isPost}/>
            <PrivacyPage when = {data.link == "/politica-de-privacidad/"}/>
            <ContactPage when = {data.link == '/contacto/'} />
            <TermsAndConditions  when = {data.link == '/terminos-y-condiciones-de-uso-aviso-de-privacidad/'}/> 
            <IntroducePage when = {data.link === '/quienes-somos/'}/>
            <Home when = {data.isHome}/>
            <Loading when = {data.isFetchin} />
            <Error when = {data.isError} />
            <ListPage when = {data.isArchive} />
            <AuthorPage when = {data.isAuthor} />

          </Switch>
          
        </Main>

        {data.isPost && <PostList/>}  

        <Footer/>
      </>
    )
}
export default connect(Root)

const Main = styled.main`
  max-width: 1200px;
  padding: 1em 0;
  margin: auto;
  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  .section{
    &[data-type="default"]{
      max-width: 870px;
      margin: auto;
    }
  }
  .section__header {
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    max-width: 870px;
    margin: 0 auto 40px;
    & > div{
      &:last-child{
        justify-self: end;
      }
    }
    h3{
      font-size: 17px;
      font-weight: 600;
      text-transform: uppercase;
    }
    a{
      font-size: 15px;
      font-weight: 500;
      text-decoration: none;
      color: black;
      display: grid;
      grid-template-columns: 16px auto;
      grid-gap: 8px;
      align-items: center;
      i{
        display: inline-flex;
        img{
          display: block;
        }
      }
      svg{
        max-width: 16px;
      }
    }
  }
  .button__general--go-to{
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    color: black;
    display: grid;
    grid-template-columns: 16px auto;
    grid-gap: 8px;
    align-items: center;
    i{
      display: inline-flex;
      img{
        display: block;
      }
    }
    span{
      margin-bottom: 0px;
      color: #000;
      font-size: 15px;
    }
  }
  div.button__general--go-to, .link__general--go-to{
    float: right;
    margin-top: 20px;
    display: grid;
    width: fit-content;
    grid-template-columns: 12px auto;
    grid-gap: 8px;
    align-items: center;
    svg{
      color: white;
      max-width: 16px;
    }
    span{
      color: white;
      font-size: 13px;
      font-weight: 300;
      width: -webkit-fit-content;
      width: -moz-fit-content;
      width: fit-content;
      display: inline-block;
    }
  }
  @media (max-width: 769px){
    padding: 1em 20px;
  }
`
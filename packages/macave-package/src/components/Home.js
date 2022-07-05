import React, {Suspense,lazy,useEffect,useState} from 'react';
import { connect, styled,css, Slot } from 'frontity';

import Section1 from './HomeSections/Section1'
import Section2 from './HomeSections/Section2'
import Section3 from './HomeSections/Section3'
import Section4 from './HomeSections/Section4'
import Section5 from './HomeSections/Section5'
import Section6 from './HomeSections/Section6'
import Section7 from './HomeSections/Section7'
import Section8 from './HomeSections/Section8'
import Section9 from './HomeSections/Section9'
import Section10 from './HomeSections/Section10'
import YoutubeVideo from './YoutubeVideo'
import Loading from './Loading'

import Axios from 'axios';

import { Head } from "frontity";



const Home = ({state,props}) => {
    const data = state.source.get(state.router.link)


    const [information,setInformation] = useState()
    const fetchApi = async() => {
        const response = await fetch('https://seunonoticias.net/wp-json/wp-macave/v1/schema')
        const responseJSON = await response.json()
        setInformation(responseJSON)
    }

    useEffect(() => {
        fetchApi();

    },[]);

    
    return(
        <>
            <Head>
                {!information ? '': <meta data-rh="true" name="description" content={information.Description}/> }
                {!information ? '': <meta data-rh="true" property="fb:pages" content={information.FacebookPages}/> }
                {!information ? '': <meta data-rh="true" property="fb:app_id" content={information.FacebookId}/>}
                <meta data-rh="true" property="og:type" content="article"/>
                {!information ? '': <meta data-rh="true" property="og:title" content={information.Name}/>}
                {!information ? '': <meta data-rh="true" property="og:site_name" content={information.Name}/>}
                <meta data-rh="true" property="og:url" content={data.link}/>
                {!information ? '': <meta data-rh="true" property="og:image" content={information.SiteImage}/>}
                {!information ? '': <meta data-rh="true" property="og:description" content={information.Description}/>}
                {!information ? '': <title data-rh="true">{information.Name} | {information.Description}</title>}

            </Head>
            <div>
                <Section1/>
                <Section2/>
                
                <Section4/>
                <YoutubeVideo/>
                <Section5/>
                <Section6/>
                <Section7/>
                <Section8/>
                <Section9/>
                <Section10/>
                {/* <Slot name = 'Below-Header' /> */}
            </div>
        </>
       
    )
}

export default connect(Home)
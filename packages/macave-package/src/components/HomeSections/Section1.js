import React, {useEffect,useState, useRef} from 'react';
import {connect,styled} from 'frontity'
import Link from '@frontity/components/link'
import HeaderSection from '../HeaderSection';
import GoToIcon from '../svgIcons/goToIcon';
import Loading from '../Loading';


const Section1 = ({state,styled,propsAPI,actions}) => {


    const url = 'https://eventosyfestivales.com/wp-json/wp-macave/v1/home';
    const [hasDataLoaded,setSelectedCard] = useState();
    const [information,setInformation] = useState();
    const ref = useRef();
    const [isActiveCard, setActiveCard] = useState();
    const fetchApi = async() => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setInformation(responseJSON)
    }

    useEffect(() => {
        fetchApi();
    },[])

    useEffect(() => {
        if ( information && !hasDataLoaded ) {
            setInitialCard();
            return () => {
                document.querySelector('.card__description').removeEventListener('click', () => goToPost);
            }
        };
    })
    const goToPost = (e) => {
        if ( ref.current ) {
            
            let urlToGo = ref.current.getAttribute('data-url');
            actions.theme.linkToPost(urlToGo);
        }
    }

    const setInitialCard = (e) => {
        const coverElement = document.getElementsByClassName('cover__wrap');
        if ( coverElement.length > 0 ) {
            let focusElement;
            for (let index = 0; index < coverElement.length; index++) {
                const element = coverElement[index];
                let childrenElements = element.querySelectorAll('a'),
                    selectedNumberElement = Math.round(childrenElements.length / 2) - 1;
                
                focusElement = childrenElements[selectedNumberElement];
                modifyStyles(childrenElements, focusElement, selectedNumberElement,coverElement );
                if ( focusElement ) {
                    setSelectedCard(focusElement.querySelector('.card__description').getAttribute('data-id'));
                }
            }
        }
    }
    const toggleHover =(id,index) => (e) => {
        e.preventDefault();
        let wrapElement = e.target.closest('a'),
            containerElement = wrapElement.closest('div'),
            parentElement = wrapElement.parentNode,
            siblingsElements = parentElement.children,
            selectedElementPosition = index;
        if ( wrapElement ){
            if ( index == 0 ) selectedElementPosition = 'initial';
            if ( index == (siblingsElements.length - 1) ) selectedElementPosition = 'final';
            
            modifyStyles(siblingsElements,wrapElement, selectedElementPosition, containerElement, index);
        }
    };

    const modifyStyles = ( elements, wrapElement, selectedElementPosition, containerElement, indexEl ) =>{
        let initialZoom = 1,
            initialOpacity = 0,
            eachModule = containerElement.offsetWidth / elements.length * 2,
            addUnit = ( window.innerWidth < 900 ) ? .14 : .09, 
            positionElementsArray = Object.keys(elements),
            elementPositionToFinalSelected = Object.keys(elements).reverse(),
            itemsafterSelectedElement, newElemetsArray;
        
        if ( selectedElementPosition == 'initial' || selectedElementPosition == 'final' ) {
            for (let index = 0; index < elements.length; index++) {
                let calculatedValue = 1 - ( 1 * ( addUnit * index)),
                    thisElement = ( selectedElementPosition == 'final' ) ? elements[elementPositionToFinalSelected[index]] : elements[index],
                    xPositionSign = ( selectedElementPosition == 'final' ) ? '-' : '';
                
                thisElement.removeAttribute("style");
                thisElement.classList.remove("active");
                thisElement.querySelector('.card__opacity').removeAttribute("style");

                wrapElement.classList.add("active");
                thisElement.style.cssText = `
                    transform: translate3d(${xPositionSign}${100 - (calculatedValue * 100)}px, 0px, 0px) scale3d(${calculatedValue}, ${calculatedValue}, 1);
                    z-index: ${elements.length - index}`;
                thisElement.querySelector('.card__opacity').style.opacity = `${index * .16}`;
            }
            return
        }

        for (let index = 0; index < elements.length; index++) {
            let newPosition = selectedElementPosition - Math.abs( selectedElementPosition - index),
                calculatedValue = 1 - ( 1 * ( addUnit * (selectedElementPosition - newPosition) ) ),
                thisElement = elements[index],
                xPositionSign = ( index >= selectedElementPosition ) ? '' : '-';
            thisElement.removeAttribute("style");
            thisElement.querySelector('.card__opacity').removeAttribute("style");
            thisElement.classList.remove("active");

            wrapElement.classList.add("active");
            thisElement.style.cssText = `
                transform: translate3d(${xPositionSign}${110 - (calculatedValue * 100)}px, 0px, 0px) scale3d(${calculatedValue}, ${calculatedValue}, 1);
                z-index: ${newPosition}`;
            thisElement.querySelector('.card__opacity').style.opacity = `${(selectedElementPosition - newPosition) * .25}`;
        }
    }
 
    
    return(
        <div className='cover__section section' data-type="default" >
            { !information ? <Loading/>:
                <div className='section__header'>
                    <h3>{information.titleSection}</h3>
                <div>
                    {(() => {
                        if ( information.URLSection ) {
                            return(
                                <Link link ={information.URLSection}> 
                                    <GoToIcon></GoToIcon>
                                    <span>Ver todas</span>
                                </Link>
                            )
                        }
                    })()}
                </div>
            </div>
            }
            <Items className='cover__wrap'>
                { !information ? '':
                    information.info.map((element,index) => {
                        
                        return (
                            <a key = {element.url} id = {'el-'+element.id} className="active" onMouseEnter={toggleHover('el-'+element.id,index)} data-id={element.id}>
                                <CardContent>
                                    <div className='card__background' style={{backgroundImage: `url(${element.image})`}}></div>
                                    <div className='card__opacity'></div>
                                    <div className='card__description' data-id={'card-'+element.id}>
                                        <h2 onClick={ goToPost }>
                                            {element.title}
                                        </h2>
                                        <p onClick={ goToPost }>{element.metadescription[0]}</p>
                                        <div className='button__general--go-to' ref={ref} onClick={ goToPost } data-url={element.url}>
                                            <GoToIcon></GoToIcon>
                                            <span>Ver más</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </a>
                        )
                    })
                }
                
            </Items>
        </div>
    )
}


export default connect(Section1)


const CardContent = styled.div`
    left: -113px;
    width: -webkit-calc(100% + 226px);
    width: calc(100% + 226px);
    transition: transform 500ms cubic-bezier(0.190,1.000,0.220,1.000);
    border-radius: 8px;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    .card__background{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-position: 50% 50%;
        -webkit-background-size: cover;
        background-size: cover;
    }
    .card__description{
        display:none;
    }
    &::after{
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        background-image: linear-gradient(to top,rgba(0,0,0,.6) 0,transparent 70%);
        content: "";
        display: block;
        z-index: 2;
    }
    .card__opacity{
        background: #202124;
        height: 100%;
        left: 0;
        opacity: 0;
        pointer-events: none;
        position: absolute;
        top: 0;
        width: 100%;
        will-change: opacity;
        z-index: 1;
    }
`

const Items = styled.div`
    display: flex;
    height: 454px;
    margin: 0 auto 55px;
    position: relative;
    width: -webkit-calc(100% - 226px);
    width: calc(100% - 226px);
    & > a {
        display: block;
        margin: 6px 0
        font-size:1.2em;
        color: black;
        -webkit-text-decoration: none;
        text-decoration: none;
        height: 454px;
        max-width: 400px;
        position: relative;
        -webkit-transition: opacity 700ms cubic-bezier(0.190,1.000,0.220,1.000) 0ms;
        transition: opacity 700ms cubic-bezier(0.190,1.000,0.220,1.000) 0ms, transform 500ms cubic-bezier(0.190,1.000,0.220,1.000);
        width: calc(100% - 48px);
        will-change: transform;
        .card__background{
            transition: transform 500ms cubic-bezier(0.190,1.000,0.220,1.000);
        }
        .card__description {
            position: absolute;
            display: block;
            bottom: 0;
            box-sizing: border-box;
            padding: 20px 0px;
            opacity: 0;
            color: white;
            z-index: 3;
            pointer-events: none;
            width: 100%;
            max-width: calc( 100% - 40px);
            left: 50%;
            transform: translateX(-50%);    
            display: none;
        }
        &.active{
            background-image: linear-gradient(to top,rgba(0,0,0,.6) 0,transparent 85%);
            .card__description {
                opacity: 1;
                cursor: pointer;
                pointer-events: all;
                display: block;
            }
            .card__background{
                transform: scale3d(1.3,1.3,1.3)
            }
        }
    }
`
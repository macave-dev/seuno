import React, { useEffect, useRef } from "react";
import { Head } from 'frontity';
import { connect,styled } from 'frontity';
import Link from '@frontity/components/link';
import Error_image from '../assets/404.png';
import GoToIcon from "./svgIcons/goToIcon";

const Page404 = ({ state }) => {

  const titleEl = useRef(null);
  const { focusOnChange } = state.theme;

  useEffect(() => {
    if(focusOnChange) {
      titleEl.current.focus();
    }
  }, []);


  return (
    <>
    <Head>
      <title data-rh="true">404 - Not Found</title>
    </Head>
    <Container>
      <img src={Error_image}/>
      <Description>
        <p ref={titleEl} tabIndex="-1">Algo salió mal con la ruta, te invitamos a regresar y seguir navegando</p>
        <Link link='/'>
          <i><GoToIcon></GoToIcon></i>
          <span>Continuar navegando</span>
        </Link>
      </Description>
    </Container>
    </>
    );
};

export default connect(Page404);

const Container = styled.div`
  display: grid;
  max-width: 870px;
  margin: 120px auto;
  grid-template-columns: 50% 50%;
  grid-gap: 25px;
  align-items: center;
  width: 90%;
  justify-content: center;
  img{
    max-width: 100%;
  }
  @media (max-width: 767px) {
    display: block;
    margin: 70px auto;
    img{
      margin-bottom: 50px;
    }
  }
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: rgba(12, 17, 43);
  font-size: 4em;
`;

const Description = styled.div`
  p{
    font-size: 17px;
    color: #000000;
    margin: 0 0 40px;
  }
  a{
    display: grid;
    grid-template-columns: 16px auto;
    grid-gap: 10px;
    align-items: center;
    text-decoration: none;
    font-size: 15px;
    color: #407BFF;
  }
  @media (max-width: 767px) {
    text-align: center;
    a{
      width: fit-content;
      margin: 0 auto;
    }
  }
`;
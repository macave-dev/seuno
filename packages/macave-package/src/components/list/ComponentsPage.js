import React from "react";
import { connect,styled,decode } from "frontity";
import Link from "@frontity/components/link"
import dayjs from 'dayjs';

const ComponentsPage = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
                <div>
                    {data.items.map(({ type, id }) => {
                      const item = state.source[type][id];
                      const formattedDate = dayjs(item.date).format("DD MMMM YYYY")
                      return (
                        <Container  key={id}>
                        <Link link = {item.link}>
                          <span className='card__background--wrap'>
                            <span className='card__background' style={{backgroundImage: `url(${item.jetpack_featured_media_url})`}}></span>
                          </span>
                          <span>
                            <h3>{decode(item.title.rendered)}</h3>
                            <ul>
                              <li>{formattedDate} <span>-</span></li>
                              <li>{state.source.author[item.author].name}</li>
                            </ul>
                          </span>
                        </Link>
                    </Container>
                      );
                    })}
                </div>
  );
};

export default connect(ComponentsPage);


const Container = styled.div`
  & > a {
    color: black;
    text-decoration: none;
    display: grid;
    grid-template-columns: 140px auto;
    grid-gap: 20px;
    position: relative;
    margin-bottom: 28px;
    padding: 15px;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid #707070;
    .card__background--wrap{
      position: relative;
      width: 100%;
      height: 130px;
      overflow: hidden;
      border-radius: 10px;
      display: block;
    }
    .card__background{
        display: block;
        position: relative;
        width: 100%;
        height: 130px;
        transform: scale(1);
        transition: transform 500ms cubic-bezier(0.190,1.000,0.220,1.000);
        background-position: center;
        background-size: cover;
    }
    & > span{
      display: block;
      h3{
        display: block;
        color: #4C4A58;
        font-size: 18px;
        font-weight: 500;
        margin-top: 10px;
      }
      ul{
        list-style: none;
        padding: 0;
        display: grid;
        grid-template-columns: auto auto;
        width: fit-content;
        li{
          margin-right: 5px;
          font-size: 14px;
          color: #868495;
        }
      }
    }
    &:hover{
      .card__background{
          transform: scale(1.2);
      }
    }
  }
  @media (max-width: 767px) {
    a{
      display: block;
    }
  }
`

const Items = styled.div`
  display: block;
  max-width: 870px;
  margin: 0 auto 20px;
`
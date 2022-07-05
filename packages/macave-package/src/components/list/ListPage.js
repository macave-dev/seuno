import React, {useState,useEffect} from "react"
import {connect,styled,decode} from 'frontity';
import Link from "@frontity/components/link"
import dayjs from 'dayjs';
import ComponentsPage from  './ComponentsPage'
import Pagination from '../Pagination'
import Loading from "../Loading";

const ListPage = ({ state,actions, link }) => {

    const data = state.source.get(state.router.link)

    {data.isFetching && <Loading/>}
  return (
    <Items>
     
      {data.taxonomy == 'category' ? 
      <div>
          <h1>Categoría: {decode(state.source[data.taxonomy][data.id].name)}</h1>
        </div>
      :null}

      {data.isTag &&
      <div>
          <h1>Tag: {decode(state.source[data.taxonomy][data.id].name)}</h1>
        </div>
      }

      

      {data.isAuthor && (
        <Header>
          <Bold>Autor: {decode(state.source.author[data.id].name)}</Bold>
        </Header>
      )}

      {data.isSearch && (
        <Header>
          <Bold>Resultados de búsqueda para: {data.searchQuery}</Bold>
        </Header>
      )}

      <ComponentsPage />
      <Pagination />
     
    </Items>
  )
}


export default connect(ListPage);

const Container = styled.div`

width: 100%;
padding-right: 15px;
padding-left: 15px;
margin:auto;
padding-top: 10px;

@media (min-width: 576px) {
  max-width: 540px;
}
@media (min-width: 768px){
  max-width: 750px;
}
@media (min-width: 992px){
  max-width: 980px;
}
@media (min-width: 1200px){
   max-width: 1200px;
}
img {
  width: 100%;
}
&.py-3 {
  padding-top: 30px;
  padding-bottom: 30px;
}
&.py-10 {
  padding-top: 150px;
  padding-bottom: 150px;
  
  @media (max-width: 576px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
}
`

const Items = styled.div`
  display: block;
  max-width: 870px;
  margin: 0 auto 20px;
  h1{
    font-size: 19px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 40px;
  }
`
const Header = styled.h3`
  font-weight: 300;
  color: rgba(12, 17, 43, 0.9);
  font-size: 1.6rem;
`;
const Bold = styled.b`
  font-weight: 700;
`;

const W100 = styled.div`
  width: 100%;
`;

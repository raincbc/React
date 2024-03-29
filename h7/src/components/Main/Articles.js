import React, { useContext } from 'react'
import styled from 'styled-components'
import { articlesData } from '../../data/ArticlesData'
import Article from './Article'
import Title from '../Form/Title'
import { FoodContext } from '../../context/context'
import Arrow from './Arrow'

const Articles = () => {
  const {faceLoader} = useContext(FoodContext)
  return (
    <Container>
      <ArticlesTitle>
        <Title
          text={'Articles'}
          faceLoader={faceLoader}
        />
        <span>
          <Arrow />
        </span>
      </ArticlesTitle> 
      {articlesData.map((elem) => (
        <Article
          key={elem.id}
          title={elem.title}
          titleSrc={elem.titleSrc}
          color={elem.color}
          count={elem.count}
        />
      ))}
    </Container>
  )
}

export default Articles

const Container = styled.div`
  height: 415px;
  padding-left:90px;
  margin-top:40px;
  box-sizing:border-box;
  padding-right:30px;

  h1{
    font-weight: 800;
    font-size: 24px;
    line-height: 27px;
    padding-top:0;
    width:100px
  }
  
  @media (max-width: 1280px) {
    padding-left:20px;
    margin-top:10px;
  }

  @media (max-width: 1024px) {
    padding-left:5px;
  }
`;

const ArticlesTitle = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:15px;

  span{
    background: #F5F6F7;
    border-radius: 15px;
    width:46px;
    height:46px;
    cursor:pointer;
  }

  @media (max-width: 1024px) {
    margin-left:10px;
    margin-top:30px;
    span{
      width:35px;
      height:35px;
      border-radius: 8px;
    }
  }
`;
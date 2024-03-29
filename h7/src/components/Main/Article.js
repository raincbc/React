import React from 'react'
import styled from 'styled-components'
import ava1 from '../../assets/ava1.svg'
import ava2 from '../../assets/ava2.svg'
import like from '../../assets/like.svg'

const Article = ({ title, titleSrc, color, count }) => {

  return (
    <Container>
      <ImgWrapper color={color}>
        <ArticleImg src={titleSrc} alt='' />        
      </ImgWrapper>
      <ArticleContent>
        <p>{title}</p>
        <div>
          <img src={ava2} alt=''/>
          <img src={ava1} alt=''/>
          <span>
            <img src={like} alt=''/>
            <span>{count}+</span>
          </span>
        </div>
      </ArticleContent>
    </Container>
  )
}

export default Article

const Container = styled.div`
  display:flex;
  align-items:center;
  
  &:not(:first-child){
    margin-top:20px;
  }

  @media (max-width: 1280px) {
    &:not(:first-child){
      margin-top:15px;
    }
  }

  @media (max-width: 1024px) {
    width:210px;
    align-items: flex-start;

    &:not(:first-child){
      margin-top:22px;
    }
  }
`;

const ImgWrapper = styled.span`
  border-radius: 15px;
  width: 60px;
  height: 60px;
  background-color:${props => props.color};
  text-align:center;
  margin-right:15px;

  @media (max-width: 1024px) {
    width: 45px;
    height: 45px;
    padding: 3px 10px;
    margin-right:10px;
  }
`;

const ArticleImg = styled.img`
  display:inline-block;
  margin:50% auto;
  transform:translate(0, -50%);

  @media (max-width: 1024px) {
    width:30px;
    height:30px;
    transform:translate(0, -20%);
  }
`;

const ArticleContent = styled.div`
  p{
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    width:170px;
  }

  div{
    position:relative;
    display:flex;
    align-items:center;

    img:nth-child(2){
      position:absolute;
      left:18px;
    }

    &>span{
      position:absolute;
      left:16px;
      margin-left:20px;
      background: #FFF8D5;
      border: 1px solid #FFFFFF;
      border-radius: 15px;
      padding:3px  11px 5px 8px;
      box-sizing:border-box;
      display:flex;
      align-items:center;
      

      span{
        font-weight: 800;
        font-size: 10px;
        line-height: 12px;
        margin-top:4px;
        margin-left:8px;
      }
    }
  }

  @media (max-width: 1024px) {
    p{
      width:150px;
    }
  }
`;

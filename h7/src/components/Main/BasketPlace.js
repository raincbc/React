import React from 'react'
import styled from 'styled-components'
import arrow from '../../assets/arrow.svg'
import { keyframes } from 'styled-components'

const BasketPlace = () => {

    // const handleHide = (event) => {
    //     console.log(event.target)
    // }

  return (
    <Container>
          <BasketTitle>
              <p>Basket</p>
              <span onClick={()=>menuHide}>
                  <img src={arrow} alt='' />
              </span>
          </BasketTitle>
          <BasketOrder></BasketOrder>
          <button>Order - $</button>
    </Container>
  )
}

export default BasketPlace

const menuHide = keyframes`
    from{right:43px;}
    to{right:-235px}
    transition:1s;
`;

const Container = styled.div`
    width:20%;
    height:100%;
    right:43px;
    top:83px;
    box-shadow: 0px 4px 46px rgba(0, 0, 0, 0.2);
    border-radius: 30px 0px 0px 30px;
    position:absolute;
    background-color:white;
    z-index:5;
    padding:32px 21px 32px 32px;
    box-sizing:border-box;
    // animation-name: ${menuHide};
    // transition:1s;

    button{
        border:none;
        background: #2D9CDB;
        border-radius: 15px;
        font-weight: 700;
        font-size: 13px;
        line-height: 18px;
        color:white;
        width:100%;
        padding:16px 0;
        cursor:pointer;
    }
`;
const BasketTitle = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:22px;

    p{
        font-weight: 800;
        font-size: 30px;
        line-height: 34px;  
    }

    span{
        background: #F5F6F7;
        border-radius: 15px;
        width:46px;
        height:46px;
        cursor:pointer;

        img{
            display:block;
            margin:50% auto;
            transform:translate(0, -50%)
        }
    }
`;
const BasketOrder = styled.div`
    height:80%;
`;

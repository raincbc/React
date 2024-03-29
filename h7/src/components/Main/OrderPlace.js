import React from 'react'
import styled from 'styled-components'
import ShopBlock from './ShopBlock'
import DiscountBlock from './DiscontBlock'
import { discountData } from '../../data/MainData'
import BasketPlace from './BasketPlace'
import Articles from './Articles'

const OrderPlace = () => {
  return (
    <OrderContainer> 
      <BasketPlace/>
      <ShopBlock />      
      <DiscountBlock discountData={discountData} />    
      <Articles/>
    </OrderContainer>
  )
}

export default OrderPlace

const OrderContainer = styled.div`
width:80%;
position:relative;
overflow: hidden;

@media (max-width: 768px) {
    display:none;
}
`;

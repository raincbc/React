import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { foodData } from '../Data/FoodData'
import FoodMenuItem from './FoodMenuItem'
import { FoodContext } from '../../context/context'


const FoodMenu = () => {
  const [isActive, setIsActive] = useState(foodData[0]);
  const { setActiveMenu } = useContext(FoodContext)
  setActiveMenu(isActive);


  const changeActiveItem = (item) => {
    setIsActive(item);
  }

  return (
    <MenuList>
          {foodData.map((elem) => (
            <FoodMenuItem              
              key={elem.id}              
              title={elem.title}              
              src={elem.src}  
              isActive={isActive.id === elem.id ? isActive : null}
              changeActiveItem={()=>changeActiveItem(elem)}
            />            
          ))}
    </MenuList>
  )
}

export default FoodMenu

const MenuList = styled.ul`
  display:flex;
  margin-left:60px;
  margin-top:20px;
  text-align:center;
  margin-bottom: 20px;

    li:not(:last-child){
        margin-right:40px;
    }
  
    @media (max-width: 1280px) {
      margin-left:20px;
      margin-top:10px;

      li:not(:last-child){
        margin-right:10px;
      }
    }

    @media (max-width: 1024px) {
      margin-left:10px;

      li:not(:last-child){
        margin-right:5px;
      }
    }

    @media (max-width: 768px) {
      margin-left:6px;

      li:not(:last-child){
        margin-right:8px;
      }
    }

    
`;
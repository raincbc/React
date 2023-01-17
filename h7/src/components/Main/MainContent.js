import React, { useContext } from "react";
import styled from "styled-components";
import UserInfo from "./UserInfo";
import { userData } from "../Data/MainData";
import MainMenu from "./MainMenu";
import Delivery from "./Delivery";
import { deliveryData } from "../Data/MainData";
import HomePlace from "./HomePlace";
import { FoodContext } from "../../context/context";
import MenuPlace from './MenuPlace';
import TrendingPlace from './TrendingPlace';
import SettingsPlace from './SettingsPlace'

const MainContent = () => {
    const { isActiveMainMenu } = useContext(FoodContext)

    return (
        <MainWrapper>
            <MenuContainer>
                <UserInfo userData={userData} />
                <MainMenu />
                <Delivery deliveryData={deliveryData} />
            </MenuContainer>
            <MainContentWrapper>
                {isActiveMainMenu.type === 'home' ?
                    <HomePlace/> : <></>
                }

                {isActiveMainMenu.type === 'menu' ?
                    <MenuPlace/> : <></>
                }

                {isActiveMainMenu.type === 'trending' ?
                    <TrendingPlace/> : <></>
                }

                {isActiveMainMenu.type === 'settings' ?
                    <SettingsPlace/> : <></>
                }
            
            </MainContentWrapper>
        </MainWrapper>
    )
}

export default MainContent;

const MainWrapper = styled.section`
    display:flex;
    overflow: hidden;
    justify-content:space-between;
`;

const MenuContainer = styled.nav`
    height:100vh;
`;

const MainContentWrapper = styled.div`
    margin: 20px 20px 0 0;
    border-radius: 35px;
    background-color:white;
    height:710px;
    display:flex;
    width:100%;
`;
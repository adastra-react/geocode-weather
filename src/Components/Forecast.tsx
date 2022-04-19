import React from 'react'
import Styled from 'styled-components'
import Lottie from "lottie-react";
import LoadingAnimation from "../Assets/animations/99318-hms-loading.json"
import ForecastCards from './ForecastCards'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store'

const ForecastContainer = Styled.div`
    height: auto;
    // background-color: red;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
`

const LoadingContainer = Styled.div`
  width: 100% ;
  text-align: center;
`

const LoadingText = Styled.h1`
  font-size: 40px;
  color: #608efd;
  font-weight: 500;
  padding: 0px;
  margin: 0px;
`

const GridContainer = Styled.div`
    width: 100%;
    height: auto;
    justify-content: center;
    display: grid;
    row-gap: 50px;
    column-gap: 50px;
    grid-template-columns: auto auto;
`


interface Props {
  periods: any
}


function Forecast() {
  const periods = useSelector((state: RootState) => state.weather.periods)

  return (
    <ForecastContainer>
      {periods.length === 0 ?
         <LoadingContainer>
            <Lottie loop={true} animationData={LoadingAnimation} />
            <LoadingText>Search up the weather forecast</LoadingText>
         </LoadingContainer> : 
          <GridContainer>
              {Object.keys(periods).map((period: any) => (
                <ForecastCards key={period} period={periods[period]} />
              ))}
          </GridContainer>
      }
    </ForecastContainer>
  )
}

export default Forecast
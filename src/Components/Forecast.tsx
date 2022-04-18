import React from 'react'
import Styled from 'styled-components'
import ForecastCards from './ForecastCards'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store'
import { setPeriods } from '../redux/weatherSlice'

const ForecastContainer = Styled.div`
    // width: 100%;
    // background-color: aliceblue;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
`

interface Props {
  periods: any
}


function Forecast() {
  const periods = useSelector((state: RootState) => state.weather.periods)

  return (
    <ForecastContainer>
      {periods.length === 0 ? <div>Loading...</div> : 
      Object.keys(periods).map((period: any) => (
        <ForecastCards key={period} period={periods[period]} />
      ))}
    </ForecastContainer>
  )
}

export default Forecast
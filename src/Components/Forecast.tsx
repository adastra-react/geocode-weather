import React from 'react'
import Styled from 'styled-components'
import ForecastCards from './ForecastCards'

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
  return (
    <ForecastContainer>
       <ForecastCards  />
       <ForecastCards  />
       <ForecastCards  />
       <ForecastCards  />
       <ForecastCards  />
       <ForecastCards  />
       <ForecastCards  />
       <ForecastCards  />
    </ForecastContainer>
  )
}

export default Forecast
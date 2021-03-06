import React from 'react'
import styled from 'styled-components';
import Forecast from './Forecast';
import Header from './Header';

const GridContainer = styled.div`
    display: grid;
    // grid-template-columns: 70% 30%;
    height: 100vh;
`

const LeftContainer = styled.div`
    background-color: #f1f5ff;
    height: 100%;
`
const RightContainer = styled.div`
    background-color: #fefeff;
    height: 100%;
`

interface Props {
    setXcoordinates: any
    setYcoordinates: any
    GetForcastURL: any
    periods: any
}

function GridSection() {
  return (
    <GridContainer>
        <LeftContainer>
            <Header  />
            <Forecast  />
        </LeftContainer>
    </GridContainer>
  )
}

export default GridSection
import React from 'react'
import Styled from 'styled-components'
// import ThunderStormImg from '../Assets/Images/thunder-storm.jpg'

const ForecastCardContainer = Styled.div`   
    width: 600px;
    height: 400px;
    background-color: white;
    border-radius: 12px;
`
const ImageContainer = Styled.div`
    width: 170px;
    height: 170px;
    background-image: url(${(props:any) => props.background});
    background-size: contain;
    background-repeat: no-repeat;
    // border-top-left-radius: 12px;
    // border-top-right-radius: 12px;
    border-radius: 10px;

    img {
        width: 100%;
    }
`

const ImageSection = Styled.div`
    width: 100%;
    height: 200px;
    display: grid;
    place-items: center;
`

const ImageTextContainer = Styled.div`

`

const ForecastCardTextContainer = Styled.div`
    paddin
    width: 100%;
    height: 300px;
    text-align: center;
`

const ForecastText = Styled.p`
    font-size: 1.5rem;
    color: black;
    font-weight: 500;
    fontfamily: 'Roboto', sans-serif;
`
interface Props {
    period: any
  }

function ForecastCards({ period }: Props) {
  return (
    <ForecastCardContainer>
        <ImageSection>
            <ImageContainer background={period.icon} >

            </ImageContainer>
        </ImageSection>
        <ForecastCardTextContainer>
            <ForecastText>{period.shortForecast}</ForecastText>
            <ForecastText>{period.temperature}°</ForecastText>
            <ForecastText>{period.name}</ForecastText>
        </ForecastCardTextContainer>
    </ForecastCardContainer>
  )
}

export default ForecastCards
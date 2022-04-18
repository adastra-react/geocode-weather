import React from 'react'
import Styled from 'styled-components'
import ThunderStormImg from '../Assets/Images/thunder-storm.jpg'

const ForecastCardContainer = Styled.div`   
    width: 200px;
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
    periods: any
  }

function ForecastCards() {
  return (
    <ForecastCardContainer>
        <ImageSection>
            <ImageContainer background={ThunderStormImg} >
                {/* <img src={ThunderStormImg}/> */}
            </ImageContainer>
        </ImageSection>
        <ForecastCardTextContainer>
            <ForecastText>forecast</ForecastText>
            <ForecastText>17°</ForecastText>
            <ForecastText>monday</ForecastText>
        </ForecastCardTextContainer>
    </ForecastCardContainer>
  )
}

export default ForecastCards
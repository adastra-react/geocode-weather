import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { RootState } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux';
import { setPeriods } from '../redux/weatherSlice'

const HeaderContainer = styled.div`
    height: 130px;
    display: flex;
    justify-content: space-between;
    padding: 20px 40px 20px 40px;
    align-items: center;
`

const HeaderTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const MainText = styled.h1`
    font-size: 40px;
    color: #608efd;
    font-weight: 500;
    padding: 0px;
    margin: 0px;
`

const Subtext = styled.p`
    font-size: 15px;
    color: #9699ac;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: row
    height: 100%;
    justify-content: space-between
    width: 90%;

    input {
        height: 40px;
        width: 200px;
        border: none;
        border-radius: 5px;
        // padding-left: 10px;
    }

    input:focus {
        outline: none;
    }
`

interface Props {
    setXcoordinates: any
    setYcoordinates: any
    GetForcastURL: any
}

function Header() {

    const dispatch = useDispatch();
    const [address, setAddress] = useState('');
    let OneLineAddress = `https://geocoding.geo.census.gov/geocoder/locations/onelineaddress`
    const periods = useSelector((state: RootState) => state.weather.periods)
    
    const getCoordinates = () => {
        axios.get(OneLineAddress, {
            params: {
                address: address,
                benchmark: 'Public_AR_Current',
                format: 'json'
            }
        })
            .then(res => {
                let coordinates = res.data.result.addressMatches[0].coordinates
                console.log(coordinates)
                getForcastURL(coordinates.x, coordinates.y)
            })
            .catch(err => {
                console.log(err.message)
            })
            
    }

    const getForcastURL = (xcoordinates, ycoordinates) => {
        axios.get(`https://api.weather.gov/points/${ycoordinates},${xcoordinates}`).then(res => {
            let weatherURL = res.data.properties.forecast
            dispatch(setPeriods(weatherURL))
            console.log(weatherURL)
            getWeeklyForcast(weatherURL)
            
        })
    }

    const getWeeklyForcast = (forecastURL) => {
        axios.get(forecastURL).then(res => {
            let weeklyForcast : []
            weeklyForcast = res.data.properties.periods
            // dispatch(setPeriods(res.data.properties.periods))
            // setTimeout(() => {
            //     dispatch(setPeriods([]))
            // }, 1000)
            dispatch(setPeriods(weeklyForcast))
            console.log(periods)
        })
    }


  return (
    <HeaderContainer>
        <HeaderTextContainer>
            <MainText>07:32AM</MainText>
            <Subtext>Monday, August 10th</Subtext>
        </HeaderTextContainer>
        <InputContainer>
            <input placeholder='Address' required onChange={(e) => setAddress(e.target.value)} value={address} />
                <button
                    type='submit'
                    onClick={getCoordinates}
                     >
                    submit
                </button>
        </InputContainer>
    </HeaderContainer>
  )
}

export default Header
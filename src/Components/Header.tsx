import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { RootState } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux';
import { set_X_coordinates, set_Y_coordinates } from '../redux/slice'

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

function Header({setXcoordinates, setYcoordinates, GetForcastURL}) {

    const dispatch = useDispatch();
    const Xcoordinates = useSelector((state: RootState) => state.address.xcoordinates)
    const Ycoordinates = useSelector((state: RootState) => state.address.ycoordinates)

    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [cityState, setSetCityState] = useState('')
    const [zip, setZip] = useState('')

    const [onlineAddress, setOnlineAddress] = useState('');
    const [cleanedAddress, setCleanedAddress] = useState('');
    const [address, setAddress] = useState('');
    const [loading, setLoading] = useState(false);
    let addressAPI = `https://geocoding.geo.census.gov/geocoder/locations/address`
    let OneLineAddress = `https://geocoding.geo.census.gov/geocoder/locations/onelineaddress`

    const getAddress = async () => {

          const params = {
            address: address,
            benchmark: 'Public_AR_Census2020',
            format: 'json'
          };
              setLoading(true)
              await axios.get(OneLineAddress, { params }).then((response) => {
                dispatch(set_X_coordinates(response.data.result.addressMatches[0].coordinates.x))
                dispatch(set_Y_coordinates(response.data.result.addressMatches[0].coordinates.y))
                // setTimeout(() => (
                    // ), 2000)
                    console.log(response.data.result)
                    
                    GetForcastURL()
                    setLoading(false)
                })
              .catch((err) => {
                console.log(err.message);
              })
        //   }        
    }

    // const handleSubmit = (e:any) => {
    //     e.preventDefault();
    //     // setLoading(true);
    //     getAddress();
    // }

    // useEffect(() => {

    //     getAddress()
    // }, [])

  return (
    <HeaderContainer>
        <HeaderTextContainer>
            <MainText>07:32AM</MainText>
            <Subtext>Monday, August 10th</Subtext>
        </HeaderTextContainer>
        <InputContainer>
        {/* <form
         onSubmit={getAddress}
          > */}
            <input placeholder='Address' required onChange={(e) => setAddress(e.target.value)} value={address} />
            {/* <input placeholder='city'  onChange={(e) => setCity(e.target.value)} value={city} />
            <input placeholder='state' required  onChange={(e) => setSetCityState(e.target.value)} value={cityState} />
            <input placeholder='zip' required  onChange={(e) => setZip(e.target.value)} value={zip} /> */}
            <button
                onClick={() => {
                    getAddress()
                }}
                disabled={loading}
                type='submit' >submit</button>
        {/* </form> */}
        </InputContainer>
    </HeaderContainer>
  )
}

export default Header
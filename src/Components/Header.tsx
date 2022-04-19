import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { RootState } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux';
import { setPeriods } from '../redux/weatherSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const SubmitButton = styled.button`
    border: none;
    color: ${(props:any) => props.color};
    background-color: ${(props:any) => props.backgroundColor};
    border-radius: 5px;
    padding: 10px;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: row
    height: 100%;
    justify-content: space-between
    width: 400px;

    input {
        height: 40px;
        width: 350px;
        border: none;
        border-radius: 5px;
        padding-left: 10px;
        margin-right: 20px;
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
    const time = null;
    const [ctime, setDate] = useState(time); 
    const [address, setAddress] = useState('');
    const [loading, setLoading] = useState(false);
    let OneLineAddress = `https://geocoding.geo.census.gov/geocoder/locations/onelineaddress`
    const periods = useSelector((state: RootState) => state.weather.periods)
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const AddValidAddressToast = () => toast("Please enter a valid address!");
    const AddAddressToast = () => toast("Please enter an address!");

    const handelTime = () =>{
        let time = new Date().toLocaleTimeString();
        setDate(time);
      }
    
    const getCoordinates = () => {
        setLoading(true);
        if(address === ''){
            AddAddressToast();
            setLoading(false);
        }else{
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
                    setAddress('')
                    AddValidAddressToast()
                    setLoading(false);
                })
        }       
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
            dispatch(setPeriods(weeklyForcast))
            console.log(periods)
            setLoading(false);
        })
    }

    useEffect(() => {
        handelTime();
        setInterval(handelTime, 1000);
        console.log(ctime)
    }, [])


  return (
    <HeaderContainer>
        <HeaderTextContainer>
            <MainText>{ctime}</MainText>
            <Subtext>{date}</Subtext>
        </HeaderTextContainer>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
        <InputContainer>
            <input placeholder='Address' required onChange={(e) => setAddress(e.target.value)} value={address} />
            {loading ? 
                <SubmitButton color='#608efd' backgroundColor='#f1f5ff'>Searching...</SubmitButton> : 
                <SubmitButton color='#f1f5ff' backgroundColor='#608efd' onClick={getCoordinates}>Submit</SubmitButton>}
        </InputContainer>
    </HeaderContainer>
  )
}

export default Header
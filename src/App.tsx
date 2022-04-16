import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import GridSection from './Components/GridSection';
import axios from 'axios';
import { RootState } from './redux/store'
import { useDispatch, useSelector } from 'react-redux';
import { set_X_coordinates, set_Y_coordinates, setPeriods } from './redux/slice'

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
`


function App() {
  const dispatch = useDispatch()

  const [forecastURL, setForecastURL] = useState("");
  const [periods, setPeriod] = useState([]);
  const [xcoordinates, setXcoordinates] = useState("");
  const Xcoordinates = useSelector((state: RootState) => state.address.xcoordinates)
  const Ycoordinates = useSelector((state: RootState) => state.address.ycoordinates)
  const Periods = useSelector((state: RootState) => state.address.periods)
  const [ycoordinates, setYcoordinates] = useState("");

  let weatherMainUrl = `https://api.weather.gov/points/${Ycoordinates},${Xcoordinates}`;

  const GetForcastURL = async () => {
    await axios.get(weatherMainUrl).then((response) => {
     setForecastURL(response.data.properties.forecast);
     // GetForecastPeriods()
     
     console.log(forecastURL, Xcoordinates, Ycoordinates);
     GetForecastPeriods();
   })
   .catch((error) => {
     console.log(error.message);
   })
 }

  const GetForecastPeriods = async () => {

    const headers = {
      // 'Content-Type': 'text/plain',
      'Content-Type': 'application/x-www-form-urlencoded'
  };

    await axios.get(forecastURL, {headers}).then((response) => {
      dispatch(setPeriods(response.data.properties.periods))
      setPeriod(response.data.properties.periods);
      console.log(Periods);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <AppContainer>
      <GridSection
       periods={periods}
       setXcoordinates={setXcoordinates}
       GetForcastURL={GetForcastURL}
       setYcoordinates={setYcoordinates}
       />
    </AppContainer>
  )
}

export default App
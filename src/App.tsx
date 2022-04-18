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
  return (
    <AppContainer>
      <GridSection />
    </AppContainer>
  )
}

export default App
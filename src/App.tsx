import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import GridSection from './Components/GridSection';

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
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AddressState {
    xcoordinates: any;
    ycoordinates: any;
    periods: any
    coordinates: any;
}

const initialState: AddressState = {
    xcoordinates: null, 
    ycoordinates: null,
    periods: null,
    coordinates: null
}

export const AddressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    set_X_coordinates: (state, action: PayloadAction<any>) => {
        state.xcoordinates = action.payload
    },
    set_Y_coordinates: (state, action: PayloadAction<any>) => {
        state.ycoordinates = action.payload
    },
    setPeriods: (state, action: PayloadAction<any>) => {
        state.periods = action.payload
    },
    setCoordinates: (state, action: PayloadAction<any>) => {
        state.coordinates = action.payload
    },
  },
})


export const { set_X_coordinates, set_Y_coordinates, setPeriods, setCoordinates } = AddressSlice.actions

export default AddressSlice.reducer
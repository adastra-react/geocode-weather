import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AddressState {
    periods: Array<string>
}

const initialState: AddressState = {
    periods: [],
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setPeriods: (state, action: PayloadAction<any>) => {
        state.periods = action.payload
    },
  },
})


export const { setPeriods } = weatherSlice.actions

export default weatherSlice.reducer
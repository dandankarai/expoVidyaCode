// clientReducer.js
import { createSlice } from '@reduxjs/toolkit';

const clientSlice = createSlice({
  name: 'client',
  initialState: {
    name: '',
    cnpj: '',
    cellphone: '',
    cep: '',
    state: '',
    city: '',
    neighborhood: '',
    address: '',
    houseNumber: ''
  },

  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setCnpj: (state, action) => {
      state.cnpj = action.payload;
    },
    setCellphone: (state, action) => {
      state.cellphone = action.payload;
    },
    setCep: (state, action) => {
      state.cep = action.payload;
    },
    setState: (state, action) => {
      state.state = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setNeighborhood: (state, action) => {
      state.neighborhood = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload
    },
    setHouseNumber: (state, action) => {
      state.houseNumber = action.payload;
    },
  }
});

export const { setName, setCnpj, setCellphone, setCep, setCity, setHouseNumber, setNeighborhood, setState, setAddress } = clientSlice.actions;
export default clientSlice.reducer;

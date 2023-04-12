import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { IProd } from "../../models";

export interface ProdState {
  prods: IProd[];
}

export const ProdSlice = createSlice({
  name: "cart",
  initialState: {
    prods: [
      {
        id: 1,
        top: "Сказочное заморское яство",
        head: "Нямушка",
        taste: "с фуа-гра",
        portion: "10 порций" ,
        present:"мышь в подарок",
        weight: "0,5",
        active: true,
        check:false,
        footer:"Печень утки разварная с артишоками."
      },
      {
        id: 2,
        top: "Сказочное заморское яство",
        head: "Нямушка",
        taste: "с рыбой",
        portion: "40 порций",
        present:"2 мыши в подарок",
        weight: "2",
        active: true,
        check:false,
        footer:"Головы щучьи с чесноком да свежайшая сёмгушка."
      },
      {
        id: 3,
        top: "Сказочное заморское яство",
        head: "Нямушка",
        taste: "с курой",
        portion: "100 порций",
        present:"5 мышей в подарок",
        bonus:"заказчик доволен",
        weight: "5",
        active: false,
        check:false,
        footer:"Филе из цыплят с трюфелями в бульоне."
      },
    ],
  },
  reducers: {
    handlChkd: (state, action: PayloadAction<IProd>) => {
      state.prods[action.payload.id-1].check = !state.prods[action.payload.id-1].check
    },
  },
});
export default ProdSlice.reducer;
export const {handlChkd} = ProdSlice.actions

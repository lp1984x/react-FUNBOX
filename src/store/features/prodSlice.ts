import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction"
import { IProd } from "../../models"


export interface ProdState {
    prods:IProd[]
  }

  export const ProdSlice = createSlice({
    name:"cart",
    initialState:{
        prods:[
            {
              id:1,
              top: "Сказочное заморское яство",
              head: "Нямушка",
              taste: "с фуа-гра",
              portion: "10 порций мышь в подарок",
              weight: "0,5",
              active: true,
            },
            {
              id:2,
              top: "Сказочное заморское яство",
              head: "Нямушка",
              taste: "с рыбой",
              portion: "40 порций 2 мыши в подарок",
              weight: "2",
              active: true,
            },
            {
              id:3,
              top: "Сказочное заморское яство",
              head: "Нямушка",
              taste: "с курой",
              portion: "100 порций 5 мышей в подарок заказчик доволен",
              weight: "5",
              active: false,
            },
          ]
    },
    reducers:{
        
        handlActive:(state,action:PayloadAction<IProd>)=>{
            //state.prods[action.payload.id] = true
        },
        

        
    }
  })
  export default ProdSlice.reducer;
//export const {} = ProdSlice.actions
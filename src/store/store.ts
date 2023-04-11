import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook } from 'react-redux';
import { useSelector, useDispatch} from 'react-redux';
import { ProdSlice } from './features/prodSlice';


export const store = configureStore({
  reducer: {
   prod:ProdSlice.reducer,
    
  },
  
})


export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
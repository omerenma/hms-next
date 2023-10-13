// import {configureStore, combineReducers} from '@reduxjs/toolkit'
// import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
// import {Reducer} from 'redux'

// import {setupListeners} from '@reduxjs/toolkit/query'
// import { loginApi, patientsApi } from './services'
// import { RootState } from '@reduxjs/toolkit/dist/query/core/apiState'




// export const store  = configureStore({
//     reducer:{
//         [patientsApi.reducerPath]:patientsApi.reducer,
//         [loginApi.reducerPath]:patientsApi.reducer
//     },
    

//   middleware:(getDefaultMiddleware) => getDefaultMiddleware({
//     serializableCheck:{
//       //ignoreActions:[]
//     }

//   })
//   .concat(...patientsApi.middleware, ...loginApi.middleware)
// })
// setupListeners(store.dispatch)
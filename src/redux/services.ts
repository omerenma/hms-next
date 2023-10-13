import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
// import type {Pokemon} from './types'

export const patientsApi = createApi({
    reducerPath:'patients',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000'}),
    endpoints:(builder) => ({
        getPatients: builder.query(<any>({
            query:() => `/patient`
        }))
    })
})

export const loginApi = createApi({
    reducerPath:'login',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000/users'}),
    endpoints:(builder) =>({
        login: builder.query(<any>({
            query:() => '/signin'
        }))
    })

})

export const {useGetPatientsQuery} = patientsApi
export const {useLoginQuery}  = loginApi
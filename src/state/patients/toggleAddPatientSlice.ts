'use client'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addPatientsOpen:false,
}

const switchAddPatientsModalState = createSlice({
    name:'addmodalstate',
    initialState:initialState,
    reducers: {
        toggleAddOpen: (state = initialState) => {
            state.addPatientsOpen = true
        },
        toggleAddClose: (state = initialState) => {
            state.addPatientsOpen = false
        }
    }
})

export const {toggleAddOpen, toggleAddClose} = switchAddPatientsModalState.actions;
export default switchAddPatientsModalState.reducer
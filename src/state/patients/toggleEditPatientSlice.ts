'use client'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    editOpen:false,
}

const switchEditModalState = createSlice({
    name:'modalstate',
    initialState:initialState,
    reducers: {
        toggleEditOpen: (state = initialState) => {
            state.editOpen = true
        },
        toggleEditClose: (state = initialState) => {
            state.editOpen = false
        }
    }
})

export const {toggleEditOpen, toggleEditClose} = switchEditModalState.actions;
export default switchEditModalState.reducer
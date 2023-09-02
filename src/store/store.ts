import {configureStore} from "@reduxjs/toolkit"
import loginSlice from '../state/authSlice/authSlice'
import logoutSlice from "../state/authSlice/logoutSlice"
import addAdminSlice  from "../state/adminSlice/adminSlice"
import getUsersSlice from "../state/adminSlice/getUsersSlice"
import deleteUserSlice from "../state/adminSlice/deleteUserSlice"
import editUser from "../state/adminSlice/editUser"
import getUserById from "../state/adminSlice/getUserById"
import addPatientSlice from "../state/patients/addPatientSlice"
import getPatientsSlice from "../state/patients/getPatientsSlice"
import getAdmissionsSlice from "../state/admissionSlice/getAdmissionsSlice"
import addAdmission from "../state/admissionSlice/addAdmission"
import getAppointments from "../state/appointments/getAppointments"
import getAppointmentByDoctorId from "../state/appointments/getAppointmentByDoctorId"
import bookAppointments from "../state/appointments/bookAppointments"
import addDoctorSlice from "../state/doctor/addDoctorSlice"
import getDoctorsSlice from "../state/doctor/getDoctorsSlice"
import getDoctorById from "../state/doctor/getDoctorById"
import addBusiness from "../state/accountSlice/addBusiness"
import addEnquiry from "../state/enquiry/addEnquiry"
export const store = configureStore({
    reducer:{
        // Users slice
        loginSlice,
        logoutSlice,
        addAdminSlice,
        getUsersSlice,
        deleteUserSlice,
        editUser,
        getUserById,
        
        // Patients slices
        addPatientSlice,
        getPatientsSlice,

        // Admissions
        getAdmissionsSlice,
        addAdmission,
        // Appointments
        getAppointments,
        getAppointmentByDoctorId,
        bookAppointments,

        // Doctor Slice
        addDoctorSlice,
        getDoctorsSlice,
        getDoctorById,
        // Add business
        addBusiness,
        // Enquiry
        addEnquiry
        
        
        
    },
    devTools:true,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false})

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
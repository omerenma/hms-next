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
import deletePatientSlice from "../state/patients/deletePatientSlice"
import getSinglePatient from "../state/patients/getSinglePatient"
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
import toggleEditPatientSlice from "../state/patients/toggleEditPatientSlice"
import toggleAddPatientSlice from "../state/patients/toggleAddPatientSlice"
import editPatientSlice from "../state/patients/editPatientSlice"
import doctorRemark from "../state/doctor/doctorRemark"
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
        getSinglePatient,
        deletePatientSlice,
        editPatientSlice,
        

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
        doctorRemark,
        // Add business
        addBusiness,
        // Enquiry
        addEnquiry,
        //Toggle patients state
        toggleEditPatientSlice,
        toggleAddPatientSlice
        
        
        
        
    },
    devTools:true,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false})

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
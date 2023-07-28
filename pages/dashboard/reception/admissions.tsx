import React, { ReactElement , useEffect, useState} from 'react'
import Layout from '@/src/component/Website/layout'
import MyTable from '@/src/component/reuse/AdmissionTable'
import { getAdmissionsAction } from '@/src/state/admissionSlice/getAdmissionsSlice'
import { useAppDispatch } from '@/src/store/hooks'
const Admissions = () => {
    const [data, setData] = useState([])
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getAdmissionsAction()).then((data:any) => {
            setData(data.payload)
        })
     
    }, [])
  return (
    <div style={{display:'grid', placeItems:"center"}}>
      <MyTable data={data} title="Add" />
    </div>
  )
}


export default Admissions

Admissions.getLayout = function(pages:ReactElement){
  return <Layout>{pages}</Layout>
}
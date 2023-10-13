import React, {useState, useEffect} from "react";
import { doctorRemarkAction } from "@/src/state/doctor/doctorRemark";
import { useAppDispatch , useAppSeletor} from "@/src/store/hooks";



interface Props {
  close: Function;
  // title: string;
}
const AppointmentRemarkForm = ({ close }: Props) => {
  const [ids, setId] = useState<any>("")
  const id = useAppSeletor(state => state.loginSlice.id)
  const {loading} = useAppSeletor(state => state.doctorRemark)
  const dispatch = useAppDispatch()
  const [data, setData] = useState<any>({
    name:"",
    email:"",
    phone_no:"",
    remark:""

  })
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const datas = {
      name: data.name,
      email: data.email,
      phone_no:data.phone_no,
      message: data.remark,
      doctor_id: id && id,
    };
    dispatch(doctorRemarkAction(datas))
    
  };
  
  return (
    <div className="form-container">
      <div
        style={{
          width: "400px",
          height: "50vh",
          position: "absolute",
          right: 0,
          top: 70,
          boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
          zIndex: 999,
          padding: 10,
        }}
      >
        <button
          type="button"
          onClick={() => close()}
          style={{
            border: "none",
            backgroundColor: "transparent",
            color: "red",
            padding: 10,
            cursor: "pointer",
          }}
        >
          X
        </button>
        <div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="">Patient's name</label>
            <input
              type="text"
              name="name"
              id=""
              title="name"
              style={{
                height: "30px",
                border: "none",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
              value={data.name}
              onChange={handleFormChange}
            />
            
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="email"
              id=""
              title="email"
              style={{
                height: "30px",
                border: "none",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
              value={data.email}
              onChange={handleFormChange}

            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="">Patient's phone number</label>
            <input
              type="text"
              name="phone_no"
              id=""
              title="phone_number"
              style={{
                height: "30px",
                border: "none",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
              value={data.phone_no}
              onChange={handleFormChange}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="">Remark</label>
            <textarea
              name="remark"
              title="remark"
              style={{
                border: "none",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
              value={data.message}
              onChange={handleChangeTextArea}

            ></textarea>
          </div>
        </div>
        <input
          type="submit"
          style={{
            background: "tracparent",
            boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
            border: "none",
            width: "100%",
            padding: "5px",
            marginTop: 10,
            cursor:'pointer'
          }}
          onClick={handleSubmit}
          value={loading === true ? "Loading...": "Submit"}
        />
      </div>
    </div>
  );
};

export default AppointmentRemarkForm;

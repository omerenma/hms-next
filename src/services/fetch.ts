import axios, { AxiosError } from "axios";

interface BodyType {
  id?: string;
  business_id:string;
  name: string;
  email: string;
  role: string;
  password:string;
}
interface LoginData {
  email:string;
  password:string
}
interface PatientType {
  name: string;
  email: string;
  sex: string;
  dob: string;
  residential_address: string;
  phone_no: string;
  next_of_kin_name: string;
  next_of_kin_phone_no: string;
}
interface admissionData {
  patients_id:string
  admission_date:string
  admission_room_number:string
  ailment:string
}
interface AppointmentData {
  patients_id: string;
  doctor_id: string;
  appointment_date: string;
}
interface LoginResponseType {
  message: string;
  token: string;
  name: string;
  email: string;
  role: string;
  id:string
  business_id:string
}

interface AddBusiness {
  name:string;
  address:string;
  phone:string;
  email:string;
  password:string;
}

interface AddBusinessResponseType {
  message: string;
  data:{
    name:string;
    address:string;
    phone:string;
    email:string;
    password:string;
  }
}
interface DoctorData {
  // name: string;
  email: string;
  sex: string;
  phone_no: string;
  dob: string;
  specialty: string;
}
export class ApiRequest {
  constructor() {}

  async account_login(uri: string, data:LoginData | AddBusiness): Promise<LoginResponseType> {
      try {
       
        const response = await axios.post(uri, data);
        
        return response.data
      } catch (error: any) {
        return error.response;
      }
    }

  async getUsers(uri: string) {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(uri, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error: any) {
      return error.message;
    }
  }

  async getUserById(uri: string) {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(uri, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error: any) {
      return error.message;
    }
  }

  async post(uri: string, data: BodyType | PatientType | admissionData | AppointmentData | DoctorData 
  ): Promise<LoginResponseType> {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.post(uri, data, {
        headers:{
          "Authorization":`Bearer ${token}`
        }
      });
      return response.data;
    } catch (error: any) {
      return error.response;
    }
  }

  async delete(url: string) {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(url, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error: any) {
      return error.message;
    }
  }
  async edit(uri: string, data: BodyType) {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(uri, data, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error: any) {
      return error.message;
    }
  }
}

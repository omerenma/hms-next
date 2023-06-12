import axios, { AxiosError } from "axios";

interface BodyType {
  id?: string;
  name: string;
  email: string;
  role: string;
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
  patients_id: string;
  admission_date: string;
  discharged_date: string;
}
interface AppointmentData {
  patient_id: string;
  doctor_id: string;
  appointment_date: string;
}
interface LoginResponseType {
  message: string;
  token: string;
  name: string;
  email: string;
  role: string;
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

  async getUsers(uri: string) {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(uri, {
        headers: {
          Authorization: token,
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
          Authorization: token,
        },
      });
      return response.data;
    } catch (error: any) {
      return error.message;
    }
  }

  async post(uri: string, data: BodyType | PatientType | admissionData | AppointmentData | DoctorData | LoginData
  ): Promise<LoginResponseType> {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.post(uri, data, {
        headers:{
          'Authorization':token
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
          Authorization: token,
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
          Authorization: token,
        },
      });
      return response.data;
    } catch (error: any) {
      return error.message;
    }
  }
}

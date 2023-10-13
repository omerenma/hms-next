import axios, { AxiosError } from "axios";
import cookie, { Cookies } from "react-cookie";

interface BodyType {
  business_id: string;
  name: string;
  email: string;
  role: string;
  password?: string;
  sex?:string
  specialty?:string
  phone?:any
}
interface LoginData {
  email: string;
  password: string;
}
interface PatientType {
  patient_name: string;
  patient_email: string;
  patient_sex: string;
  dob: string;
  residential_address: string;
  patient_phone_no: string;
  next_of_kin_name: string;
  next_of_kin_phone: string;
}
interface admissionData {
  patients_id: string;
  admission_date: string;
  admission_room_number: string;
  ailment: string;
}
interface AppointmentData {
  patient_id: string;
  doctor_id: string;
  appointment_date: string;
  business_id?:any
}
interface LoginResponseType {
  message: string;
  token: string;
  name: string;
  email: string;
  role: string;
  id: string;
  business_id: string;
}

interface AddBusiness {
  name: string;
  address: string;
  phone: string;
  email: string;
  password: string;
}

interface AddBusinessResponseType {
  message: string;
  data: {
    name: string;
    address: string;
    phone: string;
    email: string;
    password: string;
  };
}
interface DoctorData {
  // name: string;
  email: string;
  sex: string;
  phone_no: string;
  dob: string;
  specialty: string;
}
interface EditData {
  name?: string;
  email?: string;
  sex?: string;
  dob?: string;
  residential_address?: string;
  phone_no?: string;
  next_of_kin_name?: string;
  next_of_kin_phone?: string;
}
interface AddEnquiry {
  name: string;
  email: string;
  message: string;
}
export class ApiRequest {
  constructor() {}

  async account_login(
    uri: string,
    data: LoginData | AddBusiness
  ): Promise<LoginResponseType> {
    try {
      const response = await axios.post(uri, data, {
        withCredentials: true,
      });
      localStorage.setItem("token", response.data.accessToken);

      return response.data;
    } catch (error: any) {
      return error.response;
    }
  }

  async getUsers(uri: string) {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(uri, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (error: any) {
      return error.message;
    }
  }
  async getToken(uri: string) {
    try {
      axios
        .get("http://localhost:5000/token")
        .then((response) => console.log(response.data));
    } catch (error) {
      console.log(error);
    }
  }
  async getUserById(uri: string) {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(uri, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error: any) {
      return error.message;
    }
  }

  async post(
    uri: string,
    data:
      | BodyType
      | PatientType
      | admissionData
      | AppointmentData
      | DoctorData
      | AddEnquiry
  ): Promise<LoginResponseType> {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(uri, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error: any) {
      return error.message;
    }
  }
  async edit(uri: string, data: EditData) {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(uri, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error: any) {
      return error.message;
    }
  }

  async getRefreshToken(uri: string) {
    try {
      const response = await axios.get(uri);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}

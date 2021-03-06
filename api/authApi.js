import axios from "axios";

let baseURL = "http://71fc-27-34-48-39.ngrok.io";

export const login = async (email, password) => {
  try{
    const response = await axios.post(`${baseURL}/api/login`, {
      email,
      password,
    })
    return response.data;
  }catch(err){
    console.log(err.response.data);
    return err.response.data;
  }
}
import axios, { Axios } from "axios"

export const DeleteAdminCookie = async ()=>{
  const res = await axios.post('/api/logout',{msg:"Logout request"})
  console.log(res)

}
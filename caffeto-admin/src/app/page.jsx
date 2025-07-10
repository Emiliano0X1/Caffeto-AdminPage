"use client";

import { jwtDecode } from "jwt-decode";
import { usePedido } from "./context";
import Login from "./Login/page";
import { Dashboard } from "@mui/icons-material";

export default function ClientLayout({ children }) {

  const jwtToken = usePedido()

  const checkTimeExp = () => {
    const decodedToken = jwtDecode(jwtToken.jwtToken);
    const exp = decodedToken.exp;
    const now = Math.floor(Date.now() / 1000);

    if(exp >= now){
      return <Dashboard></Dashboard>
    }
  }

  if(jwtToken && typeof jwtToken === "string"){
      checkTimeExp();
  }

  return <Login></Login>
}

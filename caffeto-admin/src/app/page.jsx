"use client";

import Image from "next/image";
import PedidoProvider from "./context";
import { Typography } from "@mui/material";
import HomeMain from "./Dashboard/page";

export default function ClientLayout({ children }) {
  return <HomeMain></HomeMain>
}

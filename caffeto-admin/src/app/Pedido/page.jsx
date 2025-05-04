"use client";

import { Box, Typography,Button } from "@mui/material"
import {useEffect, useMemo, useState} from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PedidoCard from "../Compoments/pedidoCard";
import Link from "next/link";

export const dynamic = "force-dynamic"; 

export default function pedidoBoard() {

  const [day,setDay] = useState("");

  useEffect(() => {
    const day = new Date().toLocaleDateString();
    setDay(day);
  },[]);

    return (
      <Box className = "h-full w-full overflow-scroll bg-slate-50">
        <Box className = "flex flex-col pt-10 pb-4 text-black text-center">

          <Box className = "mr-64 mb-5">
            <Link href = "/Dashboard" color="inherit" passHref>
               <a><ArrowBackIcon color="black" fontSize="small"></ArrowBackIcon></a>
            </Link>
          </Box>

          <Typography variant="h4">Pedidos</Typography>
          <Typography variant="h8">Fecha de Hoy : {day}</Typography>

        </Box>

        <PedidoCard></PedidoCard>

      </Box>
    );
  }
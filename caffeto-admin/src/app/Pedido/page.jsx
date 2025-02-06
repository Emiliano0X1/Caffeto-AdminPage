"use client";

import { Box, Typography, Link, Button } from "@mui/material"
import {useEffect, useMemo, useState} from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PedidoCard from "../Compoments/pedidoCard";

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
            <Link href = "/Dashboard" color="inherit">
                <ArrowBackIcon color="black" fontSize="small"></ArrowBackIcon>
            </Link>
          </Box>

          <Typography variant="h4">Pedidos</Typography>
          <Typography variant="h8">Fecha de Hoy : {day}</Typography>

        </Box>

        <PedidoCard></PedidoCard>

      </Box>
    );
  }
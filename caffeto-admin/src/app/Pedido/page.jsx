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
          <Box className = "flex justify-start pl-5">
              <Link href = "/Dashboard" color="inherit">
                <ArrowBackIcon color="black" fontSize="large" className="flex justify-start"></ArrowBackIcon>
              </Link>
          </Box>

          <Typography variant="h4" className="font-bricolage">Pedidos</Typography>
          <Typography variant="h8" className="font-bricolage">Fecha de Hoy : {day}</Typography>

        </Box>

        <PedidoCard></PedidoCard>

      </Box>
    );
  }
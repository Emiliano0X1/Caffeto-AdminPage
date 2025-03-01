"use client";

import React, {useContext, useState} from "react";
import { Box, Typography, Button } from "@mui/material";
import { usePedido } from "@/app/context";


export default function PedidoView(){

    const pedido = usePedido();
    console.log("Este es el ID: ", pedido);

    return(
        <Box className="h-full w-full overflow-scroll bg-slate-50">
            <Box className = "text-black">
            <Typography variant="h1">Pedido #</Typography>

            </Box>
        </Box>
    );

    
}
"use client";

import { Typography, Box } from "@mui/material";
import { usePedido } from "../context";

export default function Title() {

  const pedido = usePedido();
  console.log("Pedido en contexto:", pedido);

    return(


        <Box className="flex flex-col p-10 text-center text-black mt-40 bg-slate-50">
            <Typography variant="h4"> Caffeto App Official Admin Page</Typography>

            <Box className="flex-1 h-full w-full text-center text-zinc-900 mt-10">
                <Typography>By Emiliano Gonzalez</Typography>
            </Box>
        </Box>
    )
}
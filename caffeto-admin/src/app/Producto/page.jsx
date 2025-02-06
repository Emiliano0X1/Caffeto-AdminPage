"use client"

import { Typography,Box, TextField, Link } from "@mui/material";
import { useState } from "react";
import ChangeStatus from "../Compoments/editarProducto";
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function productoStatus() {

  const [productoId,setProductoId] = useState(0);

    return (
      <Box className = "max-h-screen h-screen flex flex-col bg-slate-50">

        <Box className = "flex flex-col items-center justify-center pt-20 text-center text-black" >

          <Box className = "mr-64 mb-5">
            <Link href = "/Dashboard" color="inherit">
              <ArrowBackIcon color="black" fontSize="large"></ArrowBackIcon>
            </Link>
          </Box>

          <Typography variant="h5">Cambiar Disponibilidad de Producto</Typography>
        </Box>
        

        <Box className = "p-6 flex flex-col mt-10 w-72 text-black">
          <TextField
            id = "outlined-number"
            label = "Id del Producto"
            type = "number"
            size="large"
            onChange={(e) => setProductoId(e.target.value)}
            slotProps={{
                inputLabel : {
                  shrink : true,
                },
            }}
          />
          <ChangeStatus id = {productoId}></ChangeStatus>
        </Box>
      </Box>
    );
  }
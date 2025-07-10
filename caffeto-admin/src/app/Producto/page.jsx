"use client"

import { Typography,Box, TextField, Link } from "@mui/material";
import { useState } from "react";
import ChangeStatus from "../Compoments/editarProducto";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function productoStatus() {

  const [productoId,setProductoId] = useState(0);

    return (
      <Box className = "min-h-screen w-full bg-slate-50"> 

        <Box className = "flex flex-col pt-10 text-black" >
          <Box className = "flex justify-start p-5">
            <Link href = "/Dashboard" color="inherit">
              <ArrowBackIcon color="black" fontSize="large" className="flex justify-start"></ArrowBackIcon>
            </Link>
          </Box>

          <Typography variant="h5" className="font-bricolage text-center">Cambiar Disponibilidad de <br></br> Producto</Typography>
        </Box>
        

        <Box className = "p-6 flex flex-col mt-10 text-black">
          <TextField
            id = "outlined-number"
            className="font-bricolage"
            label = "Id del Producto"
            type = "number"
            size="medium"
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
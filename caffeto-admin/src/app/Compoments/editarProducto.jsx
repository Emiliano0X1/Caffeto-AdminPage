"use client"

import { Typography,Box, TextField, MenuItem,Button,Alert } from "@mui/material";
import { useEffect, useState } from "react";

const currencies = [
    {
      value: 'true',
      label: 'Si esta disponible',
    },
    {
      value: 'false',
      label: 'No esta disponible',
    },
  ];

  const fetchProducto = async(id,setProducto) => {
    try{
      const response = await fetch(`https://cafettoapp-backend.onrender.com/api/v1/producto/${id}`);

      if(!response.ok){
        console.log('No se pudo tener el producto')
        return;
      }

      const data = await response.json();
      console.log("Se ha obtenido el producto correctmante" , data);
      setProducto(data)
    } catch (error) {
      console.log('Hubo un error fatal en el sistema',error);
    }
  }


  const changeStatus = async (id,estatus,setAlert,setProducto) =>{
    try{
      const response = await fetch(`https://cafettoapp-backend.onrender.com/api/v1/producto/${id}?status=${estatus}`,{
        method : 'PATCH',
        headers : {
          Accept : 'application/json',
          'Content-Type' : 'application/json'
        },
        credentials : 'include',
      })

      console.log('Response : ',response.status);

      if(!response.ok){
        const errorData = await response.json()
        setAlert({type : 'warning' , message : 'El ID no esta registrado en la plataforma'})
        fetchProducto(id,setProducto)
        console.log("No funciono correctamente", errorData)
      }

      else{
        setAlert({type : 'success', message : 'Se ha modificado el producto con exito'})
        console.log('Funciona correctamente');
      }

    }catch(error){
      setAlert({type: 'error', message : 'Ocurrio un error fatal en el sistema'})
      console.log('hubo un error fatal', error)
    }
  };


export default function ChangeStatus({id}){

    const[status,setStatus] = useState('');
    const[alert, setAlert] = useState(null);
    const[producto,setProducto] = useState(null);

    return (
        <Box className= "flex flex-col mt-10">
            <Typography>Seleccione el nuevo estatus</Typography>

          <Box className = "flex flex-col mt-10">
            <TextField
                id="outlined-select-currency"
                select
                label="Seleccione"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
           </Box>

           {alert && <Alert severity = {alert.type}>{alert.message}</Alert>}
            {producto && <Alert severity="info">El producto esta disponible ? : {producto.active}</Alert>}

           <Box className = "flex flex-col items-center justify-center">

              <Button
                className=" ml-10 mt-32 mb-2.5 bg-slate-950 text-slate-50 text-xs w-60"
                size="large"
                variant="contained"
                onClick={() => changeStatus(id,status,setAlert,setProducto)}
              >
                Actualizar
              </Button>
           </Box>
        </Box>
    );
}
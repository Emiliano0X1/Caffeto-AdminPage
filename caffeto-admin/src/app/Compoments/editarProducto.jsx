"use client"

import { Typography,Box, TextField, MenuItem,Button } from "@mui/material";

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

export default function ChangeStatus({id}){

    return (
        <Box className= "flex flex-col mt-10">
            <Typography>Seleccione el nuevo estatus</Typography>

          <Box className = "flex flex-col mt-10">
            <TextField
                id="outlined-select-currency"
                select
                label="Seleccione"
                defaultValue="true"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
           </Box>
    
           <Box className = "flex flex-col items-center justify-center">
              <Button
                className=" ml-10 mt-32 mb-2.5 bg-slate-950 text-slate-50 text-xs w-60"
                size="large"
                variant="contained"
              >
                Actualizar
              </Button>
           </Box>
        </Box>
    );
}
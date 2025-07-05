import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function Login(){

    const[email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {

    }

    return(
        <Box className = "max-h-screen h-screen flex flex-col bg-slate-50 p-10">
            <Typography variant="h4" className="text-slate-950 text-center mt-20 font-bricolage">Iniciar Sesión</Typography>

            <Box className = "flex justify-center items-center flex-col mt-20">
                <TextField
                    id = "outlined-number"
                    className="font-bricolage w-10/12"
                    label = "Email de Admin"
                    type = "string"
                    size="medium"
                    onChange={(e) => setEmail(e.target.value)}
                    slotProps={{
                    inputLabel : {
                        shrink : true,
                    },
            }}
                >
                </TextField>

                <TextField
                    id = "outlined-number"
                    className="font-bricolage w-10/12s mt-10"
                    label = "Contraseña de Admin"
                    type = "string"
                    size="medium"
                    onChange={(e) => setPassword(e.target.value)}
                    slotProps={{
                    inputLabel : {
                        shrink : true,
                    },
            }}
                >
                </TextField>       
            </Box>
            <Box className = "flex justify-center items-center mt-28">
                <Button size="large" variant="contained" className=" bg-slate-950 text-slate-50 text-xs w-2/3">Inicia Sesión</Button>
            </Box>
        </Box>
    )
}
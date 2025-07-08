"use client";

import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { usePedido } from "../context";
import { useRouter } from "next/navigation";
import React from "react";

export default function Login(){

    const[email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {tokenFetching} = usePedido();
    const jwtToken = usePedido();
    const router = useRouter();

    const handleLogin = async () => {
        try{
            const response = await fetch("https://cafettoapp-backend.onrender.com/api/v1/cliente/login", {
                method : 'POST',
                headers : {
                    Accept : 'application/json',
                    'Content-Type' : 'application/json',
                },
                credentials : 'include',
                body : JSON.stringify({
                    email : email,
                    password : password
                })
            })

            if(!response.ok){
                const errorResponse = await response.json();
                console.log("Las credenciales no son correctas", errorResponse)
            }

            const data = await response.json();
            const responseToken = Object.keys(data)[0];
            const tokenStart = responseToken.indexOf("token=") + 6;
            const tokenEnd = responseToken.indexOf(")",tokenStart);
            const token = responseToken.substring(tokenStart,tokenEnd);

            if(token){
                tokenFetching(token)
                localStorage.setItem("jwtToken", token)
            }
            
            console.log(jwtToken)
            router.push('/Dashboard')
            console.log("Token Resultante" + token)

        } catch(error){
            console.log(error)
        }

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
                    className="font-bricolage w-10/12 mt-10"
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
                <Button 
                    size="large" 
                    variant="contained" 
                    className=" bg-slate-950 text-slate-50 text-xs w-2/3" 
                    onClick={() => handleLogin()}
                >
                    Inicia Sesión
                </Button>
            </Box>
        </Box>
    )
}
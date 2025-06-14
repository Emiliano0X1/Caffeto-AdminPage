"use client";

import { Dialog, DialogContent, DialogContentText, DialogTitle, MenuItem, DialogActions , Button} from "@mui/material";
import { usePedido } from "../context";
import React , { useState } from "react";
import pedidoBoard from "../Pedido/page";


const options = [
    {
        label : "El pedido esta siendo revisado",
        value : "EN REVISION"
    },

    {
        label : "El producto ya esta listo",
        value : "LISTO"
    },

    {
        label : "El pedido esta en preparacion",
        value : "EN PREPARACION"
    },

    {
        label : "El pedido no se puede realizar",
        value : "CANCELADO"
    },

    {
        label : "El pedido ya ha sido entregado",
        value : "ENTREGADO"
    },
]


const patchPedido = async (id, newStatus) => {
    try{
        const response = await fetch(`https://cafettoapp-backend.onrender.com/api/v1/pedido/${id}?status=${newStatus}`, {
            method: 'PATCH',
            headers : {
                Accept : 'application/json',
                'Content-Type' : 'application/json'
              },
              credentials : 'include',
        })

        console.log('Response : ' , response.status)

        if(!response.ok){
            const errorData = await response.json()
            console.log("No funciono correctamente", errorData)
        }

        else{
            console.log('Funciona correctamente');
        }
        
    }catch(error){
        console.log("Hubo un error fatal en el sistema", error)
    }
}


export default function ChangeOptions({open, setOpen}){

    const[newStatus,setNewStatus] = useState('')

    const pedido = usePedido();
    const pedidoMain = pedido.pedido;
    console.log('Pedido ID : ', pedidoMain.id)

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <React.Fragment>
            <Dialog
                sx={{
                    "& .MuiBackdrop-root": {
                        backgroundColor: "rgba(255, 255, 255, 0.3)", // Blanco translúcido
                        backdropFilter: "blur(15px)", // Efecto de desenfoque
                    },
                }} 
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const email = formJson.email;
                        console.log(email);
                        handleClose();
                    },
                },
            }}
            >

            <DialogTitle>Actualizar el estatus del pedido</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Ingresa el nuevo estados del pedido #{pedidoMain.id}
                </DialogContentText>
                <TextField
                    id="outlined-select-currency"
                    autoFocus
                    required
                    margin ="dense"
                    select
                    label="Seleccione"
                    value = {newStatus}
                    fullWidth
                    onChange={(e) => setNewStatus(e.target.value)}
                >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
                </TextField>
            </DialogContent>
            <DialogActions>
                <Button onClick = {handleClose}>Salir</Button>
                <Button type="submit" onClick={() => patchPedido(pedidoMain.id,newStatus)}>Actualizar</Button>
            </DialogActions>
         </Dialog>      
        </React.Fragment>
    )
}
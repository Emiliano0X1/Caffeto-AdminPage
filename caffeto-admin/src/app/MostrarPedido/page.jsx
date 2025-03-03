"use client";

import React, {useContext, useState} from "react";
import { Box, Typography, Button } from "@mui/material";
import { usePedido } from "@/app/context";


export default function PedidoView(){

    const pedido = usePedido();
    console.log("Este es el ID: ", pedido);

    const pedidoMain = pedido.pedido;

    const productos = pedidoMain.producto;

    return(
        <Box className="h-screen overflow-scroll bg-slate-50">
            <Box className = "flex flex-col text-center mt-10 justify-center text-black">
                <Typography variant="h3">Pedido # {pedidoMain.id}</Typography>

                <Box className = "p-6 text-left">
                    <Typography variant="h5" color="primary" >Informacion del Cliente</Typography>
                    <Typography variant = "subtitle1">Nombre : {pedidoMain.cliente.name}</Typography>
                    <Typography variant="subtitle1"> Telefono : {pedidoMain.cliente.phoneNumber}</Typography>
                    <Typography variant="subtitle1">Direccion : {pedidoMain.cliente.location}</Typography>
                </Box> 

                <Box className = "pl-6 pt-2 text-left">
                    <Typography variant="h5" color="primary" >Informacion del Pedido</Typography>
                    <Typography variant = "subtitle1" >Fecha : {pedidoMain.data}</Typography>
                    <Typography variant="subtitle1"> Total : $ {pedidoMain.total} pesos</Typography>
                    <Typography variant="subtitle1"> Estatus : {pedidoMain.status}</Typography>
                </Box>   

                <Box className = "pl-7 pt-2 text-left">

                    {productos.map((producto) => (
                        <React.Fragment key={producto.id}>

                            <Typography variant="h5" color="info" >Productos</Typography>
                            <Typography variant = "subtitle1">Producto #{producto.id}</Typography>
                            <Typography variant = "subtitle1">Nombre : {producto.producto.name}</Typography>
                            <Typography variant="subtitle1"> Precio Unitario: $ {producto.producto.price} pesos</Typography>
                            <Typography variant="subtitle1"> Cantidad : {producto.cantidad}</Typography>
                            <Typography variant="subtitle1"> Tipo : {producto.producto.type}</Typography>
                        
                            {console.log(producto.extras)}


                        </React.Fragment>
                    ))}
                    
                </Box>   

            </Box>
        </Box>
    );

    
}
"use client";

import React, {useState} from "react";
import { Box, Typography, Button } from "@mui/material";


export default function PedidoView({pedido}){

    const [productos, setProductos] = useState([]);
    setProductos(pedido)

    return(
        <Box className="h-full w-full overflow-scroll bg-slate-50"> 
            <Typography variant="h1">Pedido #{pedido.id}</Typography>
            <Typography>Cliente : {pedido.cliente}</Typography>
            <Typography>Estatus : {pedido.status}</Typography>
            <Typography>Total : {pedido.total}</Typography> 

            {productos.producto.map((producto) => 
            
            <Box>
                <Typography variant="h4">Nombre : {producto.nombre}</Typography>
                <Typography variant="h4">Tipo : {producto.type}</Typography>
                <Typography variant="h4">Precio : {producto.price}</Typography>
                <Typography variant="h4">Cantidad : </Typography>
                <Typography variant="h4">Extras : </Typography>

                {productos.extra ? productos.extra.map((extra) =>(
                    <Box>
                        <Typography variant="h4">Extra : {extra.name}</Typography>
                        <Typography variant="h4">Precio : {extra.price}</Typography>
                    </Box>
                )) : <Typography variant="h4">El producto no tiene extras</Typography>}
            </Box>
        )}
        </Box>
    );
}
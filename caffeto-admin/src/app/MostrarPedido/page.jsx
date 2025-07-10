"use client";

import React, {useContext, useEffect, useState} from "react";
import { Box, Typography, Button , Card, CardContent, Divider, Link} from "@mui/material";
import Image from "next/image"
import { usePedido } from "@/app/context";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function PedidoView(){

    const pedido = usePedido()
    const pedidoMain = pedido.pedidoMain
    console.log(pedido)

    //Funcion para poner icono dependiendo del tipo de producto

    const getImageSource = (type) => {

        if(type === 'Frappe') return "/Icons/frappeIcon.jpg";

        else if(type === 'Clasico') return "/Icons/clasicoIcon.png";

        else if(type === 'Muffin') return "/Icons/muffinIcon.png";

        else if(type === 'Iced Latte') return "/Icons/icedLatteIcon.jpg";

        else if(type === 'Refrescante') return "/Icons/refreIcon.png";

        else if(type === 'Smoothie') return "/Icons/SmothieIcon.png";

        else if(type === 'Waffle' || type === 'Waffle-Nutella') return "/Icons/waffleIcon.jpg";

        else if(type === 'Tisana') return "/Icons/tisanaIcon.jpg";

        else if(type === 'Tes') return "/Icons/teIcon.jpg";

        else if(type === 'Soda Italiana') return "/Icons/sodaIcon.jpg";

        else if(type === 'Postre') return "/Icons/postreIcon.png";

        else if(type === 'Mini') return "/Icons/miniIcon.png";

        else if(type === 'Galleta') return "/Icons/galletaIcon.png"

        else if(type === 'Rebanada') return "/Icons/rebanadaIcon.png"

        else return "/Icons/noExist.png" //Cambiar por favor faltan mas iconos
    }

    const manageHourFormat = (pedido) => {
        const date = pedido.date;
        const dateFinal = new Date(date)
        dateFinal.setHours(dateFinal.getHours() - 6)

        //Minutes Formmat
        const totalMinutes = dateFinal.getMinutes();
        const hours = dateFinal.getHours() + Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;

        const formattedHours = hours % 12 || 12;
        const formatedMinutes = minutes.toString().padStart(2,'0');
        const ampm = hours >= 12 ? 'pm' : 'am'

        return `${formattedHours} : ${formatedMinutes} ${ampm}`
    }

    return(
        <Box className="h-screen overflow-scroll bg-slate-50">
            <Box className = "flex flex-col text-center mt-10 justify-center text-black">

            <Box className = "flex justify-start pl-5">
                <Link href = "/Pedido" color="inherit">
                    <ArrowBackIcon color="black" fontSize="large" className="flex justify-start"></ArrowBackIcon>
                </Link>
            </Box>

            {pedidoMain && pedidoMain.cliente ? (
                <>

            <Typography variant="h3" className="font-bricolage mt-3">Pedido # {pedidoMain.pedido_id}</Typography>

            <Box className = "mt-10 flex justify-center h-auto">
                <Card variant="outlined" className="border-black rounded-3xl shadow-lg w-11/12" key = {pedidoMain.id}>
                  <CardContent>
                    <Box className = "p-3 text-left">
                        <Typography variant="h6" color="black" className="font-bricolage">Información del Pedido</Typography>
                        <Typography className="font-bricolage text-base">Fecha : {pedidoMain.date.slice(0,10)}</Typography>
                        <Typography className="font-bricolage text-base">Hora : {manageHourFormat(pedidoMain)}</Typography>
                        <Typography className="font-bricolage text-base"> Total : $ {pedidoMain.total} pesos</Typography>
                        <Typography className="font-bricolage text-base"> Estatus : {pedidoMain.status}</Typography>
                    </Box> 
                    </CardContent> 
                </Card>
            </Box>   

                    <Typography variant="h5" color="black" className="font-bricolage text-center mt-10">Productos</Typography>
                        {pedidoMain.pedidoProductos.map((producto, index) => (
                    <React.Fragment key={index}>
                        <Box className = " relative mt-10 flex justify-center h-auto">
                            <Card  variant="outlined" className="border-black rounded-3xl shadow-lg w-11/12">
                                <CardContent>
                                    <Box className = "pl-3 text-left">
                                            <Typography variant = "h6" color="black" className="font-bricolage">Producto #{producto.id}</Typography>
                                            <Typography className="font-bricolage text-base">Nombre : {producto.producto.name}</Typography>
                                            {/*<Typography className="font-bricolage text-base"> Precio Unitario: $ {producto.producto.price} pesos</Typography> */}
                                            <Typography className="font-bricolage text-base"> Cantidad : {producto.cantidad}</Typography>
                                            <Typography className="font-bricolage text-base"> Tipo : {producto.producto.type}</Typography>

                                            {producto.producto.type === "Frappe" ? (
                                                <Typography  className="font-bricolage text-base"> Tamaño : {producto.size} </Typography>) : null}
                        
                                            {console.log("Extras del producto",producto.extras)}

                                            <Divider className="my-4" sx = {{borderStyle : 'dashed', borderWidth : "2px"}}></Divider>

                                            <Typography variant="h6" color="black" className="font-bricolage">Extras : </Typography>

                                            <Image 
                                                src={getImageSource(producto.producto.type)}
                                                width={100} 
                                                height={100} 
                                                className="absolute -mt-40 ml-52 " 
                                                alt="frappeICON" 
                                                />
                                        

                                            {producto.extras && producto.extras.map((extra, index) => (
                                            <React.Fragment key={index}>
                                                <Typography>Tipo: {extra.type}</Typography>
                                                <Typography>Nombre: {extra.label}</Typography>
                                                <Typography>Precio: {extra.price}</Typography>

                                                <Divider className="my-4" sx = {{borderStyle : 'dashed', borderWidth : "2px"}}></Divider>
                                            </React.Fragment>
                                        ))}
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>

                        </React.Fragment>
                    ))} 


            <Typography variant="h5" color="black" className="font-bricolage text-center mt-10">Información del Cliente</Typography>
            <Box className = "mt-10 flex justify-center h-auto">
                <Card variant="outlined" className="border-black rounded-3xl shadow-lg w-11/12" key = {pedidoMain.cliente.cliente_id}>
                  <CardContent>
                    <Box className = "p-3 text-left">
                        <Typography variant="h6" color="black" className="font-bricolage" >Informacion del Cliente</Typography>
                        <Typography className="font-bricolage text-base">Nombre : {pedidoMain.cliente.cliente_name}</Typography>
                        <Typography className="font-bricolage text-base"> Teléfono : {pedidoMain.cliente.cliente_telefono}</Typography>
                        <Typography className="font-bricolage text-base">Dirección : {pedidoMain.cliente.cliente_locacion}</Typography>
                    </Box> 
                    </CardContent> 
                </Card>

            </Box>   
                </>
                
              ) : (
                <Typography>No se ha seleccionado ningun producto</Typography>
              )} 

            </Box>
        </Box>
    );
    
}
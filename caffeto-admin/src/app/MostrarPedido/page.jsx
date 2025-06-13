"use client";

import React, {useContext, useEffect, useState} from "react";
import { Box, Typography, Button , Card, CardContent, Divider} from "@mui/material";
import Image from "next/image"
import { usePedido } from "@/app/context";


export default function PedidoView(){

    const pedido = usePedido()
    const pedidoMain = pedido.pedidoMain
    console.log(pedido)

    //Funcion para poner icono dependiendo del tipo de producto

    const getImageSource = (type) => {

        if(type === 'Frappe') return "/Icons/frappeIcon.jpg";

        else if(type === 'Clasico') return "/Icons/noExist.png";

        else if(type === 'Muffin') return "/Icons/muffinIcon.png";

        else if(type === 'Iced Latte') return "/Icons/icedLatteIcon.jpg";

        else if(type === 'Refrescante') return "/Icons/refreIcon.png";

        else if(type === 'Smoothie') return "/Icons/SmothieIcon.png";

        else if(type === 'Waffle' || type === 'Waffle-Nutella') return "/Icons/waffleIcon.jpg"

        else return "/Icons/frappeIcon.jpg" //Cambiar por favor faltan mas iconos
    }
    
    return(
        <Box className="h-screen overflow-scroll bg-slate-50">
            <Box className = "flex flex-col text-center mt-10 justify-center text-black">

            {pedidoMain.cliente? (
                <>

                <Typography variant="h3" className="font-bricolage mt-3">Pedido # {pedidoMain.id}</Typography>
                
            <Box className = "mt-10 flex justify-center h-auto">
                <Card variant="outlined" className="border-black rounded-3xl shadow-lg w-11/12">
                  <CardContent>
                    <Box className = "p-3 text-left">
                        <Typography variant="h6" color="black" className="font-bricolage" >Informacion del Cliente</Typography>
                        <Typography className="font-bricolage text-base">Nombre : {pedidoMain.cliente.name}</Typography>
                        <Typography className="font-bricolage text-base"> Telefono : {pedidoMain.cliente.phoneNumber}</Typography>
                        <Typography className="font-bricolage text-base">Direccion : {pedidoMain.cliente.location}</Typography>
                    </Box> 
                    </CardContent> 
                </Card>

            </Box> 


            <Box className = "mt-10 flex justify-center h-auto">
                <Card variant="outlined" className="border-black rounded-3xl shadow-lg w-11/12">
                  <CardContent>
                    <Box className = "p-3 text-left">
                        <Typography variant="h6" color="black" className="font-bricolage">Informacion del Pedido</Typography>
                        <Typography className="font-bricolage text-base">Fecha : {pedidoMain.data}</Typography>
                        <Typography className="font-bricolage text-base"> Total : $ {pedidoMain.total} pesos</Typography>
                        <Typography className="font-bricolage text-base"> Estatus : {pedidoMain.status}</Typography>
                    </Box> 
                    </CardContent> 
                </Card>
            </Box>   

                    <Typography variant="h5" color="black" className="font-bricolage text-center mt-10">Productos</Typography>
                        {pedidoMain.producto.map((producto) => (

                        <Box className = " relative mt-10 flex justify-center h-auto">
                            <Card variant="outlined" className="border-black rounded-3xl shadow-lg w-11/12">
                                <CardContent>
                                    <Box className = "pl-3 text-left">
                                        <React.Fragment key={producto.id}>
                                            <Typography variant = "h6" color="black" className="font-bricolage">Producto #{producto.id}</Typography>
                                            <Typography className="font-bricolage text-base">Nombre : {producto.producto.name}</Typography>
                                            {/*<Typography className="font-bricolage text-base"> Precio Unitario: $ {producto.producto.price} pesos</Typography> */}
                                            <Typography className="font-bricolage text-base"> Cantidad : {producto.cantidad}</Typography>
                                            <Typography className="font-bricolage text-base"> Tipo : {producto.producto.type}</Typography>

                                            {producto.producto.type === "Frappe" ? (
                                                <Typography> Tamaño : {producto.producto.size} </Typography>) : null}
                        
                                            {console.log("Extras del producto",producto.extras)}

                                            <Divider className="my-4" sx = {{borderStyle : 'dashed', borderWidth : "2px"}}></Divider>

                                            <Typography variant="h6" color="black" className="font-bricolage">Extras : </Typography>

                                            <Image 
                                                src={getImageSource(producto.producto.type)}
                                                width={110} 
                                                height={110} 
                                                className="absolute -mt-44 ml-48 " 
                                                alt="frappeICON" 
                                                />
                                        

                                            {producto.extras && producto.extras.map((extra) => (
                                            <>
                                            <Typography>Tipo de Extra : {extra.type}</Typography>
                                            <Typography>Nombre de Extra : {extra.label}</Typography>
                                            <Typography>Precio Extra : {extra.price}</Typography>

                                            <Divider className="my-4" sx = {{borderStyle : 'dashed', borderWidth : "2px"}}></Divider>

                                            </>


                                            ))}
                                        </React.Fragment>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}   
                </>
                
              ) : (
                <Typography>No se ha seleccionado ningun producto</Typography>
              )} 

            </Box>
        </Box>
    );
    
}
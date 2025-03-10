"use client";

import { Typography, Box, Card, CardContent,Button,Link } from "@mui/material";
import Grid from '@mui/material/Grid2';
import React, { useEffect , useState} from "react";
import PedidoView from "../MostrarPedido/page";
import PedidoProvider, { usePedido } from "../context";
import { useRouter } from "next/navigation";
import ChangeOptions from "./editarPedidoCard";


const PedidoCard = () => {

 const [pedidos,setPedidos] = useState([]);

 const fecthPedidos = async () => {
    try{
        const response = await fetch("https://cafettoapp-backend.onrender.com/api/v1/pedido");

        if(!response.ok){
            console.log("No existe el pedido");
        }

        const data = await response.json();
        setPedidos(data)
        console.log(data);

    }catch(error){
        console.log(error);
    }
};

useEffect(() => {
    fecthPedidos();
},[]);

    const {selectPedido} = usePedido();// context to keep the pedidos
    const router = useRouter();

    const[open,setOpen] = useState(false);

    const managePedido = (pedido) =>{
        console.log("Guardando pedido:",pedido);
        selectPedido(pedido);

        router.push("/MostrarPedido") 
    }

    const handleOpen= (pedido) => {
        selectPedido(pedido);
        setOpen(true);
    }

    return(
        <Box className=" relative min-h-screen flex flex-wrap gap-4 items-center justify-start">

        {pedidos.map((pedido) => 
            <Card  key = {pedido.id} className="h-auto w-full mt-5 bg-slate-300 shadow-lg rounded-lg">
                <React.Fragment>

                    <CardContent>
                        <Typography variant="subtitle1" color="info">Producto #{pedido.id}</Typography>
                        <Typography variant="subtitle2">Cliente : {pedido.cliente.name} </Typography>
                        <Typography variant="subtitle2">Estatus : {pedido.status} </Typography>
                        <Typography variant="subtitle2">Total : {pedido.total}</Typography>
                        <Typography variant="subtitle2">Hora del Pedido : {pedido.data}</Typography>

                    <Box className= "absolute left-52 flex gap-2">
                      <Grid container spacing={2} columns={2} className = "flex">
                        <Grid size={4}>
                        <Button
                            className="bg-black text-stone-50"
                            variant="contained"
                            size="medium"
                            onClick={() => managePedido(pedido)}>
                                Ver
                            </Button>

                        </Grid>
                     

                        <Grid size={4}> 
                            <Button
                                className="bg-black text-stone-50"
                                variant="outlined"
                                size="medium"
                                onClick={() => handleOpen(pedido)}
                            >
                                Editar</Button>
                            </Grid>

                            {open && ( <ChangeOptions open = {open} setOpen={setOpen}></ChangeOptions>)}
                        </Grid>
                    </Box>

                    </CardContent>
                </React.Fragment>
        </Card>
    )}
        
     </Box>

    );
  
}

export default PedidoCard;

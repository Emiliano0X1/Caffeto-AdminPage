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

const fetchPedido = async (id) => {
    try{
        const response = await fetch(`https://cafettoapp-backend.onrender.com/api/v1/pedido/uni/${id}`)

        if(!response.ok){
            console.log("Response :", response.status)
        }

        const data = await response.json();
        console.log("Si jalo el fetch " , data)
        console.log("Status : ", response.status)

        return {status : response.status, data}

    }catch(error){
        console.log("Ocurrio un error fatal en el sistema")
        return 500
    }

}

    const {selectPedido , pedidoFetching} = usePedido();// context to keep the pedidos
    const router = useRouter();

    const[open,setOpen] = useState(false);

    const managePedido = async (pedido) =>{
        console.log("Guardando pedido:",pedido);
        const {status,data} = await fetchPedido(pedido.id)

        if(status === 200){
            console.log("Pedido recibido", data)
            pedidoFetching(data)
            router.push("/MostrarPedido") 
        }

        else{
            console.log("Ocurrio un error en el sistema")
        }
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

                    <Box className= " absolute flex flex-col gap-3 -mt-24 ml-64">
                        <Button
                            className="bg-black text-stone-50"
                            variant="contained"
                            size="medium"
                            onClick={() => managePedido(pedido)}>
                                Ver
                            </Button>
                            <Button
                                className="bg-black text-stone-50"
                                variant="outlined"
                                size="medium"
                                onClick={() => handleOpen(pedido)}
                            >
                                Editar</Button>
                    
                            {open && ( <ChangeOptions open = {open} setOpen={setOpen}></ChangeOptions>)}
                    
                    </Box>

                    </CardContent>
                </React.Fragment>
        </Card>
    )}
        
     </Box>

    );
  
}

export default PedidoCard;

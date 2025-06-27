"use client";

import { Typography, Box, Card, CardContent,Button,Link } from "@mui/material";
import React, { useEffect , useState} from "react";
import { useRouter } from "next/navigation";
import ChangeOptions from "./editarPedidoCard";
import { usePedido } from "../context";

const PedidoCard = ({status}) => {

 const [pedidos,setPedidos] = useState([]);

 const fecthPedidos = async () => {
    try{
        const response = await fetch(`https://cafettoapp-backend.onrender.com/api/v1/pedido/status?status=${status}`);

        if(!response.ok){
            console.log("No existe el pedido");
        }

        const data = await response.json();
        setPedidos(data)
        //console.log(data);

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
        console.log("Si jalo el fetch")
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
        const {status,data} = await fetchPedido(pedido.pedido_id)

        if(status === 200){
            //console.log("Pedido recibido", data)
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
        <Box className=" relative min-h-screen flex flex-col gap-4 items-center justify-start ">
            {pedidos.map((pedido) => 
                
                <Card  key = {pedido.pedido_id} variant = "outlined" className="border-black rounded-3xl shadow-lg w-full">
                    <React.Fragment>

                        <CardContent>
                            <Typography variant="subtitle1" color="black" className="font-bricolage">Producto #{pedido.pedido_id}</Typography>
                            <Typography variant="subtitle2" className="font-bricolage">Cliente : {pedido.cliente.cliente_name} </Typography>
                            <Typography variant="subtitle2" className="font-bricolage">Estatus : {pedido.status} </Typography>
                            <Typography variant="subtitle2" className="font-bricolage">Total : {pedido.total}</Typography>
                            <Typography variant="subtitle2" className="font-bricolage">Hora del Pedido : {manageHourFormat(pedido)}</Typography>

                        <Box className= " absolute flex flex-col gap-3 -mt-24 ml-56">
                            <Button
                                className="bg-black text-stone-50 font-bricolage"
                                variant="contained"
                                size="medium"
                                onClick={() => managePedido(pedido)}>
                                    Ver
                                </Button>
                                <Button
                                    className="bg-black text-stone-50 font-bricolage"
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

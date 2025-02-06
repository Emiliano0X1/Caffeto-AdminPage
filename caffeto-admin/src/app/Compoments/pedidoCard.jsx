import { Typography, Box, Card, CardContent,Button } from "@mui/material";
import React, { useEffect , useState} from "react";


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

    return(
        <Box className="min-h-screen flex flex-wrap gap-4 items-center justify-start">

        {pedidos.map((pedido) => 
            <Card  key = {pedido.id} className="h-auto w-full mt-5 bg-slate-300 shadow-lg rounded-lg">
                <React.Fragment>

                    <CardContent>
                        <Typography variant="subtitle1" color="info">Producto #{pedido.id}</Typography>
                        <Typography variant="subtitle2">Cliente : {pedido.cliente.name} </Typography>
                        <Typography variant="subtitle2">Estatus : {pedido.status} </Typography>
                        <Typography variant="subtitle2">Total : {pedido.total}</Typography>
                        <Typography variant="subtitle2">Hora del Pedido : {pedido.data}</Typography>

                    <Box className= "flex">
                        <Button>Ver</Button>
                        <Button>Editar</Button>
                    </Box>

                    </CardContent>
                </React.Fragment>
        </Card>
    )}
        </Box>
    );
}


export default PedidoCard;

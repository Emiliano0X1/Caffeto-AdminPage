import { Typography, Box, Card, CardContent,Button } from "@mui/material";
import Grid from '@mui/material/Grid2';
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

    const [pedidoSeleccionado, setPedidoSeleccionado] = useState(null)

    const selectPedido = (pedido) =>{
        console.log(pedido.id)
        setPedidoSeleccionado(pedido)
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
                            onClick={() => selectPedido(pedido)}
                                >Ver</Button>
                        </Grid>

                        <Grid size={4}> 
                            <Button
                                className="bg-black text-stone-50"
                                variant="contained"
                                size="medium"
                            >
                                Editar</Button>
                            </Grid>

                        </Grid>
                    </Box>

                    </CardContent>
                </React.Fragment>
        </Card>
    )}

        {pedidoSeleccionado && (
            <Typography>OMG</Typography>
        )}
        
     </Box>

    );
}


export default PedidoCard;

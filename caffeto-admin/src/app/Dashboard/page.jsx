
import { Button, Box} from "@mui/material";
import Title from "../Compoments/header";
import Link from "next/link";
export default function HomeMain() {
    return (
      <Box className="max-h-screen h-screen flex flex-col bg-slate-50">
        <Box className = "p-6 h-full">
          <Title/>

          <Box className = "flex flex-col items-center justify-center">
          <Link href = "/Pedido" replace color="inherit">
            <Button
              className="mt-10 mb-2.5 bg-slate-950 text-slate-50 text-xs w-60"
              size = "large"
              variant="contained"
              >Ver Pedidos</Button>
          </Link>
          <Link href = "/Producto" replace color="inherit">
            <Button
              className="mt-3.5 bg-slate-950 text-slate-50 text-xs w-60"
              size="large"
              variant="contained"
              >Cambiar disponibilidad de Productos</Button>
              </Link> 
            </Box>
        </Box>
      </Box>
    );
  }
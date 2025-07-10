"use client";
import { useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModalInfo({status, onClose}){

    const router = useRouter();

    const[open, setOpen] = useState(true)
    const handleClose = () => {
        setOpen(false);

        if(onClose){
            onClose();
        }

        if(status === 200){
            router.push('/Dashboard')
        }
    } 

    console.log("En el modal")

    return(
        <Box>
            <Modal
                open = {open}
                onClose={handleClose}
            >
            <Box sx={style}>
                <Typography id = "modal-modal tittle" variant="h6" component="h2" className="font-bricolage text-black" >
                    Informacion de Sesion
                </Typography>
    
                    {status && status === 200 ? (
                       <Typography id = "modal-modal description" className="font-bricolage text-black">
                            Se ha iniciado sesion con exito
                        </Typography>
                    ) : (
                        <Typography id = "modal-modal description" sx={{ mt: 2 }} className="font-bricolage text-black">
                            Hubo un error en el sistema, las credenciales no son correctas
                        </Typography>
                    )}

                <Button onClick={handleClose} color="blue" variant="medium" className="bg-black mt-4">Cerrar</Button>
            </Box>

            </Modal>
        </Box>

    )

}
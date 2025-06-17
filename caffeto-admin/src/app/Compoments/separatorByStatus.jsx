import { Accordion, AccordionDetails, AccordionSummary, Box, Fade, Typography } from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PedidoCard from "./pedidoCard";


export default function SeparatorByStatus(){

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    };

    return(   
        <Box className = "relative min-h-screen">
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon = {<ExpandMoreIcon />}
                    id="panel1-header"
                >
                    <Typography component='span' variant = 'subtitle1' className="font-bricolage">Pedido Recientes</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <PedidoCard status='EN REVISION'></PedidoCard>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded = {expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon = {<ExpandMoreIcon></ExpandMoreIcon>}
                    id="panel2-header"
                >
                    <Typography component='span' variant="subtitle1" className="font-bricolage">Pedidos En Preparación</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <PedidoCard status='EN PREPARACION'></PedidoCard>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded = {expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon = {<ExpandMoreIcon></ExpandMoreIcon>}
                    id="panel3-header"
                >
                    <Typography component='span' variant="subtitle1" className="font-bricolage">Pedidos Listos para Entregar</Typography>  
                </AccordionSummary>

                <AccordionDetails>
                    <PedidoCard status='LISTO'></PedidoCard>
                </AccordionDetails>

            </Accordion>

            <Accordion expanded = {expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon = {<ExpandMoreIcon></ExpandMoreIcon>}
                    id="panel4-header"
                >
                    <Typography component='span' variant="subtitle" className="font-bricolage">Pedidos Entregados</Typography>
                </AccordionSummary>
            </Accordion>

            <Accordion expanded = {expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon = {<ExpandMoreIcon></ExpandMoreIcon>}
                    id="panel5-header"
                >
                    <Typography component='span' variant="subtitle1" className="font-bricolage">Pedidos Cancelados</Typography>

                </AccordionSummary>

            </Accordion>
        </Box>
    )
}
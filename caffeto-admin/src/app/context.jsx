"use client";

import React, {useContext, useState, createContext} from "react";

const PedidoContext = createContext();

export default function PedidoProvider({children}){

    const[pedido, setPedido] = useState({});

    const selectPedido = (pedidoMain) => {
        setPedido(pedidoMain);
        console.log("Pedido actualizado con:", pedidoMain);
    }

    return(
        <PedidoContext.Provider value = {{pedido, selectPedido}}>
            {children}
        </PedidoContext.Provider>
    )

}


export const usePedido = () => useContext(PedidoContext)
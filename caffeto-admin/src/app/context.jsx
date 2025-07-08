"use client";

import React, {useContext, useState, createContext,useEffect} from "react";

const PedidoContext = createContext();

const PedidoProvider = ({children}) => {

    const[pedido, setPedido] = useState({});
    const[pedidoMain,setPedidoMain] = useState({});
    const[jwtToken, setJwtToken] = useState(typeof window !== "undefined" ? localStorage.getItem("jwtToken") || "" : "");

    const selectPedido = (pedidoMain) => {
        setPedido(pedidoMain);
        console.log("Pedido actualizado con:", pedidoMain);
    }

    const pedidoFetching = (pedido) => {
        setPedidoMain(pedido)
        console.log("Este es el pedido Individual: ", pedido);
    }

    const tokenFetching = (token) => {
        setJwtToken(token)
        localStorage.setItem("jwtToken", token)
    }

    return(
        <PedidoContext.Provider value = {{pedido, selectPedido,pedidoMain,pedidoFetching,jwtToken,tokenFetching}}>
            {children}
        </PedidoContext.Provider>
    )

}

const usePedido = () => useContext(PedidoContext)

export {PedidoProvider,usePedido};
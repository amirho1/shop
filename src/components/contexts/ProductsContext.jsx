import React, { useState, useEffect, createContext, useContext } from 'react'
import useFetch from '../../hooks/useFetch'
import Spiner from "../spiner/Spiner";

const context = createContext();
export let useProductContext = () => useContext(context);


export default function ProductsContext({ children }) {
  const { data } = useFetch("https://fakestoreapi.com/products");
  const [products] = useState(data);

  return (
    <context.Provider value={products}>
      {children}
    </context.Provider>
  )
}

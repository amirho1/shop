import React from 'react'
import { useFetch } from "../../hooks/useFetch";
export default function Card() {
  const arr = useFetch("https://fakestoreapi.com/products");
  console.log(arr)
  return (
    <div className="card">

    </div>
  )
}

import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Currency() {

    const data = useLoaderData();
    const currencies = Object.keys(data).map(
        (c, i) => <option key={i} value={c}>{c}</option>
    );

  return (
    <select>
        {currencies}
    </select>
  )
}

export default Currency

export const preDataLoader = async () => {
    const api = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";
    const response = await fetch(api);
    if (!response.ok){
        throw new Error("Sorry, not find data");
    }
    else{
        const data = await response.json();
        return data
    }
}
import { useEffect, useState } from "react";

function useCyrrencyInfo(currency){
const [data, setData] = useState({});

useEffect(()=>{
fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
.then(
    response =>(response.json()))
.then(
    response => setData(response[currency])) 
},[currency])

console.log(data);
return data
}

export default useCyrrencyInfo